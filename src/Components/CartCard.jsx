import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const CartCard = ({ item, removeFromCart }) => {
  const { image, productName, price, quantity } = item;
  const totalAmount = parseFloat(price.replace("$", "") * quantity).toFixed(2);

  return (
    <div className="cart-card">
      <div className="cart-card-details">
        <img src={image} alt={productName} />
        <p>{productName}</p>
        <p>Price: {price}</p>
        <p>
          <QuantityCounter quantity={quantity} />
        </p>
        <div className="cart-total">
          <p>
            <strong>Total: ${totalAmount}</strong>
          </p>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="btn-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
