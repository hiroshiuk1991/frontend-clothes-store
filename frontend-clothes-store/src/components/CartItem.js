import React from 'react'


class CartItem extends React.Component {

    render() {
        return(
            <div>
            {this.props.item.item_name}
            </div>
        )
    }


}

export default CartItem