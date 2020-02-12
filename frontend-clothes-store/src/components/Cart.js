import React from 'react'

import CartItem from './CartItem'

class Cart extends React.Component {


    render () {
    
        return (
            <div>
            {
                this.props.itemsToBuy.map(item => <CartItem item={item} key={item.id}/>)
            }
            </div>
        )
    }


}


export default Cart;