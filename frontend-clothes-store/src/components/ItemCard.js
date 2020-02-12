import React from 'react'


class ItemCard extends React.Component {


    render () {
        
        return(
            <div>
            <h3>{this.props.item.name}</h3>
            <img alt='oh no!' src={this.props.item.image}/>

                <button onClick={() => this.props.addToCart(this.props.item.id, this.props.item.name)}> Add to Cart</button>
            </div>
        )
    }

}


export default ItemCard; 
