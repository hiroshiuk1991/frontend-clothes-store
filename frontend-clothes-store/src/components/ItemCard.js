import React from 'react'


class ItemCard extends React.Component {


    render () {
        return(
            <div>
            <h3>{this.props.item.name}</h3>
                <button onClick={this.props.addToCart}> Add to Cart</button>
            </div>
        )
    }

}


export default ItemCard; 
