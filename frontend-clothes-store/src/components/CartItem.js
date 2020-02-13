import React from 'react'


class CartItem extends React.Component {

    render() {
        return(
            <div className='cartcard'>
            {this.props.item.item_name}
            <button className='removebutton'> Remove </button>
            </div>
        )
    }


}

export default CartItem