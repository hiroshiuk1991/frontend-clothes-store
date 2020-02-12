import React from 'react'

import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import API from '../API'

class SignUpPage extends React.Component {
  state = {
    username: '',
    password: '',
    newUser: false,
  }

  handleSubmit = () => {
    API.login(this.state.username, this.state.password)
      .then(data => {
        
        if (data.error) throw Error(data.error)
        this.props.login(data)
        this.props.history.push('/')
      })
      .catch(error => alert(error))
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  newCustomer = () => 
      this.setState( { newUser: !this.state.newUser } )

  handleNewAccount = event => 
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { username, password, newUser } = this.state
    const { handleChange, handleSubmit, newCustomer } = this

    return (
      <div>
      
        <TextField
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />

        <br />
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button>
        <br />
        <br />

        <Button onClick={() => newCustomer()} variant='contained' color='primary'>
          Create Account
        </Button>
        <br />
        <br />
        {newUser ? 
          <div>
            <TextField
              id='usernameInput'
              label='Username'
              value={username}
              onChange={handleChange}
              margin='normal'
              name='username'
            />
            <br />
            <TextField
              id='passwordInput'
              label='Password'
              value={password}
              onChange={handleChange}
              margin='normal'
              name='password'
              type='password'
            />
            <br />
            <Button onClick={this.handleNewAccount} variant='contained' color='primary'>
            Create
            </Button>
            </div>
          : null }
       
      </div>
    )
  }
}

export default SignUpPage
