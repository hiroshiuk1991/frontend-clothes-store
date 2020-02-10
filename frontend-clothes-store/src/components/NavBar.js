import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = ({username, signOut}) => {
    return (
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
    )
}


export default NavBar;