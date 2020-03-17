import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
//   state = {
//     itemsToBuy: this.props.itemsToBuy
//   };

  componentDidMount() {}
  render() {
    return (
      <div>
        {this.props.itemsToBuy.length > 0 ? (
          <div>
            <h2 className="cart-words" >Your cart items:</h2>
            {this.props.itemsToBuy.map(item => (
              <CartItem
                item={item}
                key={item.id}
                deleteCartItem={this.props.deleteCartItem}
              />
            ))}
            <div className="paypal-position">
              <button className="paypal" onClick={() => this.props.payForItems()} >PayPal QuickPay</button>{" "}
            </div>
          </div>
        ) : (
          <h2 className="cart-words">Your Cart is empty.</h2>
        )}
      </div>
    );
  }
}

export default Cart;
