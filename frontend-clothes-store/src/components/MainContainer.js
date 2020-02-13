import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../App.css'

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
    itemsToBuy: [],
    index: 0,
    searchTerm: "",
    filterBy: 'All' 
  }

  login = data => {
    this.setState({
      username: data.customer_username,
      userId: data.customer_id
    })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
    localStorage.removeItem('token')
  }

  addToCart = (id, name) =>
    API.post(cartUrl, {
      cart: {
        customer_id: this.state.userId,
        item_id: id,
        item_name: name
      }
    })

    updateSearchTerm = event => {
      this.setState({
          searchTerm: event.target.value
      })
    }

    updateFilter = event => {
      this.setState({filterBy: event.target.value})
    }

    searchbarFilterItems = () => {
      return this.state.items.filter(item => 
        item.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    dropdownFilterItems = items => {
      return this.state.filterBy === 'All'
       ? items
       : items.filter(item => item.gender === this.state.filterBy)
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

    fetch('http://localhost:3000/carts')
      .then(resp => resp.json())
      .then(items => this.setState({ itemsToBuy: items }))
  }

  renderMore = () => {
      this.state.index >= 40
      ? this.setState({
          index: 0
      })
      : this.setState({
          index: this.state.index + 10
      })
  }

  render () {
    const searchbarFilteredItems = this.searchbarFilterItems()
    const searchbarAndDropdownFiltered = this.dropdownFilterItems(searchbarFilteredItems)
    const { username, itemsToBuy, index, filterBy} = this.state //took items away as not nec
    const { signOut, login, addToCart, renderMore, updateFilter, updateSearchTerm } = this
    const renderTen = searchbarAndDropdownFiltered.slice(index, index + 10)
        return (
      <div>
       
        <BrowserRouter>
          <NavBar username={username} signOut={signOut} updateFilter={updateFilter} updateSearchTerm={updateSearchTerm}
          filterBy={filterBy}/>
                    <h1 className='title'>The Clothes Store</h1>
          <div>
            <Switch>
              <Route
                exact
                path='/login'
                component={props => <SignUpPage {...props} login={login} />}
              />
              <Route
                exact
                path='/itemslist'
                component={props => (
                  <ItemList
                    {...props}
                    username={username}
                    items={renderTen}
                    addToCart={addToCart}
                    renderMore={renderMore}
                  />
                )}
              />
              <Route
                exact
                path='/cart'
                component={props => <Cart {...props} itemsToBuy={itemsToBuy} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default MainContainer
