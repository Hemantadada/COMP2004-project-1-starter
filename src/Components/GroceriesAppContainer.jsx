import { useState } from "react";
import products from "../data/products";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  // Add product to cart, updating quantity if item already exists
  const handleAddToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  // Remove item from cart by id
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Empty the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="groceries-app">
      <NavBar cart={cart} />
      <div className="product-cart-container">
        <ProductsContainer products={products} addToCart={handleAddToCart} />
        <CartContainer
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          emptyCart={clearCart}
        />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
