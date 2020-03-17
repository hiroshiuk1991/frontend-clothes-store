import React from "react";

const CartItem = props => {
  return (
    <div className="cartcard">
      <div className="cart-view">
        {props.item.name && (
          <div>
            <div className="cartcard-orientation">
            <h3>
              <u>
                {" "}
                {props.item.name} - £{props.item.price}{" "}
              </u>
            </h3>
            <img className="thumbnail-image-size" alt="oh no!" src={props.item.image} />
            </div>
            <div>
              <button className="removebutton"> Remove </button>
            </div>
          </div>
        )}
        {props.item[0].name && (
          <div>
            <div className="cartcard-orientation">
            <h3>
              <u>
                {" "}
                {props.item[0].name} - £{props.item[0].price}{" "}
              </u>
            </h3>
            <img className="thumbnail-image-size" alt="oh no!" src={props.item[0].image} />
            </div>
            <div>
              <button className="removebutton" onClick={() => props.deleteCartItem(props.item[1].id, props.item[0].id)}> Remove </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
