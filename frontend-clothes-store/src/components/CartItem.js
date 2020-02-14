import React from 'react'


class CartItem extends React.Component {

    render() {
        return(
            <div >
            <div className='cartcard'>
            {this.props.item.item_name}
            </div>
        </div>
        )
    }


}

export default CartItem