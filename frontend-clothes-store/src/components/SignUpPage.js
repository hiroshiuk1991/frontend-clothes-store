import React from 'react'

import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import API from '../API'

class SignUpPage extends React.Component {
  state = {
    usernameLogin: '',
    passwordLogin: '',
    newUser: false,
    usernameSignup: '',
    passwordSignup: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    API.login(this.state.usernameLogin, this.state.passwordLogin)
      .then(data => {
        
        if (data.error) throw Error(data.error)
        this.props.login(data)
        this.props.history.push('/')
      })
      .catch(error => alert(error))
  }
  
  handleCreateAccount = (event) => {
    event.preventDefault()
    API.createAccount(this.state.usernameSignup, this.state.passwordSignup)
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
    const { handleChange, handleSubmit, newCustomer, handleCreateAccount, handleNewAccount } = this

    return (
      <div className='loginContainer'>
      <div className='logindiv'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
        <TextField
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='usernameLogin'
        />
        <br />
        <TextField
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='passwordLogin'
          type='password'
        />

        <br />
        <Button type='submit' variant='contained' color='primary'>
          SUBMIT
        </Button>
        </form>
        <br />
        <br />

        <Button onClick={() => newCustomer()} variant='contained' color='primary'>
          Create Account
        </Button>
        <br />
        <br />
        
        {newUser ? 
          <div>
            <form onSubmit={handleCreateAccount}>
            <TextField
              label='Username'
              value={username}
              onChange={handleNewAccount}
              margin='normal'
              name='usernameSignup'
            />
            <br />
            <TextField
              label='Password'
              value={password}
              onChange={handleNewAccount}
              margin='normal'
              name='passwordSignup'
              type='password'
            />
            <br />
            <Button type='submit' variant='contained' color='primary'>
            Create
            </Button>
            </form>
            </div>
          : null }
       </div>
      </div>
      </div>
    )
  }
}

export default SignUpPage
