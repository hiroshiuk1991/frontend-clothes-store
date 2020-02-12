import React from 'react'

class Cart extends React.Component {


    render () {
    const items = this.props.itemsToBuy
        return (
            <div>
            {items.map(item => <h2>{item.name}</h2>)}
            </div>
        )
    }


}


export default Cart;