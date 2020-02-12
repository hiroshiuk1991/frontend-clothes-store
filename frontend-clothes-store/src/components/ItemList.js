import React from 'react'
import ItemCard from './ItemCard'

class ItemList extends React.Component {


    render() {
        return(
            <div>
                {this.props.items.map(item => <ItemCard item={item} key={item.id} addToCart={this.props.addToCart}/>)}
                
            </div>
        )
    }

}



export default ItemList;