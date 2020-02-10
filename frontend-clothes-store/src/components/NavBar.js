import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core'


const NavBar = ({username, signOut}) => {
    return (
        <div>
        <h3> {username? `Welcome Back ${username}` 
        : 'Welcome to Clothes Store'} </h3>
        <div>
            <NavLink to='/' exact>Homepage</NavLink>
            <NavLink to='/signup' exact>Sign In/Sign Up</NavLink> 
            <NavLink to='/itemslist' exact>Items List</NavLink> 
            <NavLink to='/cart' exact>Cart</NavLink>  
            {username && (
                <Button onClick={signOut}>
                    SIGN OUT
                </Button>
            )}
        </div>
        </div>
    )
}


export default NavBar;