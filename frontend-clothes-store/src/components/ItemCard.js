import React from 'react'


class ItemCard extends React.Component {


    render () {
        
        return(
            <div className="card">
                <img alt='oh no!' src={this.props.item.image} />
                <div className="card-container">
                 <h3><b>Name: {this.props.item.name}</b></h3>
                 <h3>Price: £{this.props.item.price}</h3>
                 <h3>Type: {this.props.item.category}</h3>
                 <h3>Size: {this.props.item.size}</h3>
            

                <button onClick={() => this.props.addToCart(this.props.item.id, this.props.item.name)}> Add to Cart</button>
            </div>
            </div>
        )
    }

}


export default ItemCard; 
