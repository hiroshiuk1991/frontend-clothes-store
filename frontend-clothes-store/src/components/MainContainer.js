import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ItemList from './ItemList'
import SignUpPage from './SignUpPage'
import NavBar from './NavBar'
// import Cart from './Cart'


class MainContainer extends React.Component {

    state = {
        items: [],
        username: null
    }
    signUp = username => {
        this.setState({ username: username })
    }

    signout = () => {
        this.setState({ username: null })
    }

    componentDidMount () {
        if (this.props.username === null ) {
            this.props.history.push('/signin')
        }
    }


    render() {
        const { items, username } = this.state
        const { signUp, signOut } = this.props
        return(
            <Router>
                <div>
                    {/* <Route exact path="/Items" component ={ItemList, items={items} }/>
                    
                    <Route exact path="/signUp" component={ props => SignUpPage{...props},
                         signUp={signUp},
                         signOut={signOut}}/>
                    <NavBar username={username} /> */}
                </div>
            </Router>
        )
        
    }


}

export default MainContainer;