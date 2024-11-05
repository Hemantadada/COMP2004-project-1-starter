import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQty = () => setQuantity((prevQty) => prevQty + 1);

  const decreaseQty = () => {
    if (quantity > 0) {
      setQuantity((prevQty) => prevQty - 1);
    }
  };

  const handleAdd = () => {
    if (quantity === 0) {
      alert("Please enter the amount quantity you would like.");
    } else {
      addToCart(product, quantity);
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="product-card">
      <h3>{product.productName}</h3>
      <img src={product.image} alt={product.productName} />
      <h4>{product.brand}</h4>
      <p>{product.price}</p>

      <div className="quantity-controls">
        <button
          className="quantity-btn"
          onClick={decreaseQty}
          disabled={quantity === 0}
        >
          -
        </button>
        <span>{quantity}</span>
        <button className="quantity-btn" onClick={increaseQty}>
          +
        </button>
      </div>

      <button className="add-cart-btn" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
