import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <div>
        <div className="cartcard">
            <div className="cart-view">
          <h3><u>
            {this.props.item.item_name
              ? this.props.item.item_name
              : this.props.item.name} - £{this.props.item.price}
          </u></h3>
          <img className="thumbnail-image-size" src={this.props.item.image} />
          </div>
          <button className="removebutton"> Remove </button>
        </div>
      </div>
    );
  }
}

export default CartItem;
