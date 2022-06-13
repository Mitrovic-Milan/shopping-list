import React from "react";

export default function ShoppingList({ products, productSearch }) {
  return (
    <div className="shopping">
      {products
        .filter((product) =>
          product.name.en.toLowerCase().includes(productSearch)
        )
        .map((product) => (
          <button className="shopping__list" key={product._id}>
            {product.name.en}
          </button>
        ))}
    </div>
  );
}
