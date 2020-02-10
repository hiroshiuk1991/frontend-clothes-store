import React from 'react'


class NavBar extends React.Component {


    render (props) {
        return(
            <h1> {props.username? `Welcome Back ${props.username}` 
            : 'Welcome to Clothes Store'} </h1>
        )
    }


}


export default NavBar;