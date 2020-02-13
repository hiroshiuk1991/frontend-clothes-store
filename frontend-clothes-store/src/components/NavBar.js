import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core'


const NavBar = ({username, signOut, filterBy, updateFilter, updateSearchTerm}) => {
    return (
        <div>
        <div className='navdiv'>
            <NavLink to='/' exact  className="link">Homepage</NavLink>
                <NavLink to='/login' exact className="link">Login/Create Account</NavLink> 
                <NavLink to='/itemslist' exact className="link">Items List</NavLink> 
                <NavLink to='/cart' exact className="link">Cart</NavLink>  
        <h3 className='welcome'> {username? `Welcome Back ${username}` 
        : 'Welcome to Clothes Store'} </h3>
            {username && (
                    <Button onClick={signOut} variant='contained' color='primary'>
                    SIGN OUT
                </Button>
                
            )} </div>
            <label>
                  <strong>Filter:</strong>
                  <select value={filterBy} onChange={updateFilter}>         
                    <option>All</option>
                    <option>Mens</option>
                    <option>Womens</option>
                    <option>Kids</option>
                  </select>
             </label>
           
           <br></br>
            Search for items:
              <input onChange={updateSearchTerm} placeholder='enter clothing type..' /> 
              
           
           <br></br>
           </div>
        
        
    )
}


export default NavBar;