import React from "react";
import { ProductCard } from "../components/ProductCard";
import db from "../assets/data/db.json"
import "../assets/css/Home.css";
import foto from "../assets/images/foto-home.png";
import destacados from "../assets/images/productos_destacados_transparent.png";

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
