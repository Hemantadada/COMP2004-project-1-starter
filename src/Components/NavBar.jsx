import { useState } from "react";

const NavBar = ({ cart, username = "Hemanta" }) => {
  const isCartEmpty = cart.length === 0;

  return (
    <nav className="navbar">
      <div className="navbar-user">
        <p>Welcome, {username}!</p>
      </div>
      <h1 className="navbar-title">Grocery Store</h1>
      <div className="cart-icon-container">
        <img
          src={
            isCartEmpty
              ? "src/assets/cart-empty.png"
              : "src/assets/cart-full.png"
          }
          alt="Cart"
        />
        {!isCartEmpty && <span></span>}
      </div>
    </nav>
  );
};

export default NavBar;
