import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsContainer;
