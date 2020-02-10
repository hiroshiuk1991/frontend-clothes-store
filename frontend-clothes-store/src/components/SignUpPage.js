import React from 'react'

import TextField from '@material-ui/core.TextField'
import Button from '@material-ui/core.Button'
import API from '../API'



class SignUpPage extends React.Component {

    state= {
        username: '',
        password: ''
    }

    handleSubmit = () => {
        API.signUp(this.state.username, this.state.password)
        .then(data => {
            if (data.error) throw Error(data.error)
            this.props.signUp(data)
            this.props.history.push('/mainContainer')
        })
        .catch(error => alert(error))
    }


    handleChange = event => 
        this.setState({ [event.target.name]: event.target.value })


    render() {
        const { username, password } = this.state    
        const { handleChange, handleSubmit } = this

        return (<div>        
        <TextField id='usernameInput' 
        label='Username' value={username} 
        onChange={handleChange} 
        margin='normal' 
        name='username' />        
        <br />        
        <TextField id='passwordInput' 
        label='Password' 
        value={password} 
        onChange={handleChange} 
        margin='normal' 
        name='password' 
        type='password' />        
        <br />        
        <Button 
        onClick={handleSubmit} 
        variant='contained' 
        color='primary'>          
        SUBMIT        
        </Button>      
        </div>)
    }
}


export default SignUpPage