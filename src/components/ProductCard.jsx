import React from "react";
import { Link } from "react-router-dom";
import "./css/ProductCard.css";

export function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="ps-productCard">
      <div className="ps-productCard-img-container">
        <img
          src={product.image}
          alt={product.name}
          className="ps-productCard-img"
        />
      </div>
      <div className="ps-productCard-details">
        <h3 className="ps-productCard-price">${product.price}</h3>
        <header className="ps-productCard-name">{product.name}</header>
      </div>

      <div className="ps-productCard-actions">
        <Link to={`/product/${product.id}`} className="ps-productCard-moreInfo">
          {product.rating} Ver más
        </Link>
        <button onClick={handleAddToCart} className="ps-productCard-buyButton">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
