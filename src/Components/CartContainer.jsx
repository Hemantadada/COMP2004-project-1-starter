import { useState } from "react";
import CartCard from "./CartCard";

const CartContainer = ({ cart, removeFromCart, emptyCart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart
    .reduce(
      (acc, item) =>
        acc + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    )
    .toFixed(2);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h2 style={{ color: "white" }}>Items in Cart: {totalItems}</h2>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </>
      )}

      <div className="cart-actions">
        <button onClick={emptyCart} className="btn-empty-cart">
          Empty Cart
        </button>
        <button className="btn-checkout">Checkout: ${totalPrice}</button>
      </div>
    </div>
  );
};

export default CartContainer;
