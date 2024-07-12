import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ProductCard.css";

export function ProductCard ({ name, price, id, image}) {


  return (
    <div className="ps-productCard">

      <div className="ps-productCard-img-container">
        <img
          src={image}
          alt={name}
          className="ps-productCard-img"
        />
      </div>
      <div className="ps-productCard-wrapper">
      <div className="ps-productCard-details">
        <h3 className="ps-productCard-price">${price}</h3>
        <header className="ps-productCard-name">{name}</header>
      </div>

      <div className="ps-productCard-actions">
        <Link to={`/product/${id}`} className="ps-productCard-moreInfo">
          Ver más
        </Link>
      </div>
      </div>
    </div>
  );
}
