import React from "react";

const QuantityCounter = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="quantity-counter">
      <button onClick={onDecrease} disabled={quantity === 0}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default QuantityCounter;
