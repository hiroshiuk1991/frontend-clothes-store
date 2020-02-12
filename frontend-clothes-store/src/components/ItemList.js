import React from 'react'
import ItemCard from './ItemCard'
// import API from './'

class ItemList extends React.Component {


    render() {
        return(
            <div className="prof-box">
                {this.props.items.map(item => <ItemCard item={item} key={item.id} addToCart={this.props.addToCart}/>)}
                <button onClick={this.props.renderMore}>More Items</button>
            </div>
        )
    }

}



export default ItemList;