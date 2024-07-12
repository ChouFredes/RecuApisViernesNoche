import React from "react";
import { ProductCard } from "../ProductCard";
import db from "../../data/db.json";

import "../css/Home.css";
import ContactInfo from "../ContactInfo";
import foto from "../../assets/foto-home.png";
import destacados from "../../assets/productos_destacados_transparent.png";

export const Home = () => {
  const getFeaturedProducts = () => {
    return db.slice(0, 5);
  };

  const featuredProducts = getFeaturedProducts();

  return (
    <div className="home-container">
      <section className="section-container">
        <div className="image-wrapper">
          <img src={foto} alt="Foto Home" className="centered-image" />
        </div>
        <div className="productos-destacados">
          <img src={destacados} alt="centered-image" />
        </div>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              id={product.id}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
