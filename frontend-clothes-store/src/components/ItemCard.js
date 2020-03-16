import React from 'react'


class ItemCard extends React.Component {


    render () {
        
        return(
            <div>
            <div className="card">
                <img className="adjust-card-image" alt='oh no!' src={this.props.item.image} />
                <div className="card-container">
                 <h3><b>Name: {this.props.item.name}</b></h3>
                 <h3>Price: £{this.props.item.price}</h3>
                 <h3>Type: {this.props.item.category}</h3>
                 <h3>Size: {this.props.item.size}</h3>
            

            </div>
            </div>
            <div>
                <button className='addtocart' onClick={() => this.props.addToCart(this.props.item)}> Add to Cart</button>
            </div>
            </div>
        )
    }

}


export default ItemCard; 
