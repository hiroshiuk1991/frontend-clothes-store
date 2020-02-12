import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemList from './ItemList'
import SignUpPage from './SignUpPage'
import NavBar from './NavBar'
import API from '../API'
import Cart from './Cart'

class MainContainer extends React.Component {
  state = {
    items: [],
    username: null, 
    itemsToBuy: []
  }
  login = data => {
    this.setState({ username: data.customer })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
    localStorage.removeItem('token')
  }

 addToCart = item => {
        this.setState(item,...this.state.itemsToBuy)
    }

  componentDidMount () {
      if (this.props.username === null) {
      this.props.history.push('/')
    } else if (localStorage.token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.login(data)
          this.props.history.push('/')
        })
        .catch(error => alert(error))
    }

    fetch('http://localhost:3000/items')
      .then(resp => resp.json())
      .then(items => this.setState({ items }))
  }

  render () {
    const { username, items, itemsToBuy } = this.state
    const { signOut, login, addToCart } = this
    return (
      <div>
        <BrowserRouter>
          <NavBar username={username} signOut={signOut} />
          <div>
            <Switch>
              <Route
                exact path='/login'
                component={props => <SignUpPage {...props} login={login} />}
              />
              <Route
                exact path='/itemslist'
                component={props => (
                  <ItemList {...props} username={username} items={items} addToCart={addToCart} 
                    />)} />
              <Route
                 exact path='/cart'
                 component={props => (
                  <Cart {...props}  itemsToBuy={itemsToBuy} 
                   />
                    )}
              />
            </Switch>
          </div>
            </BrowserRouter>
      </div>
    )
  }
}
export default MainContainer
