import React from 'react'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'

import ItemList from './ItemList'
import SignUpPage from './SignUpPage'
import NavBar from './NavBar'
import API from '../API'
// import Cart from './Cart'

class MainContainer extends React.Component {
  state = {
    items: [],
    username: null
  }
  login = data => {
    this.setState({ username: data.customer })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
  }

  componentDidMount () {
      if (this.props.username === null) {
      this.props.history.push('/login')
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
    const { username, items } = this.state
    const { signOut, login } = this
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
                exact path='/items'
                component={props => (
                  <ItemList {...props} username={username} items={items} />
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
