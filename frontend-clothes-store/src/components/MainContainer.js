import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemList from './ItemList'
import SignUpPage from './SignUpPage'
import NavBar from './NavBar'
import API from '../API'
import Cart from './Cart'
const cartUrl = 'http://localhost:3000/carts'

class MainContainer extends React.Component {
  state = {
    items: [],
    username: null,
    userId: null,
    itemsToBuy: []
  }
  login = data => {
    this.setState({ username: data.customer_username, userId: data.customer_id })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
    localStorage.removeItem('token')
  }

    addToCart = (id, name) =>
    
        API.post(cartUrl,
           { 
               cart:
               {
                   customer_id: this.state.userId,
                   item_id: id,
                   item_name: name
               } 
            }
       )
    
     

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

      fetch('http://localhost:3000/carts')
    .then(resp => resp.json())
    .then(items => this.setState({ itemsToBuy: items}))
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
