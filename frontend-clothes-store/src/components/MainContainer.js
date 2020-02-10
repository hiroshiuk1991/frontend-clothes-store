import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom';

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
    }


    render() {
        
        return(
            <div>
                <NavBar username={this.state.username} signOut={this.signOut}/>
                    <Switch>
                        <Route exact path='/signin' component={props => <SignUpPage {...props}
                    signUp={this.signUp}    
                    /> } />
                    <Route path='/itemList' component={props => (
                        <ItemList {...props} username={this.state.username}
                     />)} 
                     />
                    {/* <Route component={NotFound}/> */}
                   </Switch>
                   </div>
                   
                   )
                   
                }
                
                
            }
            
            export default withRouter(MainContainer);



           