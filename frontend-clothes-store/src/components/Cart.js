import React from 'react'

import CartItem from './CartItem'

class Cart extends React.Component {

    componentDidMount() {
        this.props.updateItemsToBuy()
    }

    render () {
    
        return (
            <div >
            <div className="card">
            {
                this.props.itemsToBuy.map(item => <CartItem item={item} key={item.id}/>)
            }
            </div>
            </div>
        )
    }


}


export default Cart;