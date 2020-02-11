import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ItemList from './ItemList'
import SignUpPage from './SignUpPage'
import NavBar from './NavBar'
import API from '../API';
// import Cart from './Cart'


class MainContainer extends React.Component {

    state = {
        items: [],
        username: null
    }
    signUp = data => {
        this.setState({ username: data.username })
        localStorage.token = data.token
    }

    signOut = () => {
        this.setState({ username: null })
    }

    componentDidMount () {
        if (this.props.username === null ) {
            this.props.history.push('/signin')
        }
        else if (localStorage.token){
        API.validate()
            .then(data => {
                if (data.error) throw Error(data.error)
                this.signUp(data)
                this.props.history.push('/mainContainer')
            })
            .catch(error => alert(error))
        }
    
        fetch('http://localhost:3000/items')
        .then(resp => resp.json())
        .then(items => this.setState({ items }))
        
    }


    render() {
        const { username, items } = this.state
        const { signOut, signUp } = this
        return(
              <div>
                    <Router>
                    <NavBar username={username} signOut={signOut} />
                        <div>
                        </div>
                    <Switch>
                        <Route exact path='/signup' component={props => <SignUpPage {...props}
                        signUp={signUp}
                        />} />
                        <Route path='/items' component={props => (
                        <ItemList {...props}
                            username={username}
                            items={items}
                        />)}
                        />
                    </Switch>
                </Router>
                    </div>
                   
                   )
                   
                }
                
                
            }
                export default MainContainer;
                
                

           