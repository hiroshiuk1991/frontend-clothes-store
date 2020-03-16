import React from 'react'
import API from '../API'
import CartItem from './CartItem'
import ItemList from './ItemList';

class Cart extends React.Component {

    // state = {
    //     itemsToBuy: []
    // }

    // componentDidMount() {
    //     API.fetchusercart()
    //     .then(data => this.setState({
    //       itemsToBuy: data
    //     }))
        
    // }

    // updateItemsToBuy(item) {
    //   this.setState({
    //       itemsToBuy: [...this.state.itemsToBuy, item]
    //   })
    // }

    render () {
    
        return (
            <div>
            
            {this.props.itemsToBuy.length > 0 ?
            <div>
                    <h2>Your cart items:</h2>
                {this.props.itemsToBuy.map(item => <CartItem item={item} key={item.id}/>)}
                </div>
                    : <h2>Your Cart is empty.</h2>
            }
            
            </div>
        )
    }


}


export default Cart;