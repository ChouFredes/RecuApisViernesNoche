import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../ProductCard";
import db from "../../data/db.json";
import testimonies from "../../data/testimony.json";
import "../css/Home.css";

export const Home = () => {
  const getFeaturedProducts = () => {
    return db.slice(0, 5);
  };

  const featuredProducts = getFeaturedProducts();

  const names = testimonies; // Asigna los testimonios importados a la variable names

  return (
    <div className="home-container">
      <div className="bienvenidos">Bienvenido a Technology House</div>

      <section className="section-container">
        <div className="subtitle">Productos Destacados</div>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} id={product.id} image={product.image} ></ProductCard>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h3>Testimonios</h3>
        <div className="testimonials">
          {testimonies.map((testimony, index) => (
            <div key={index} className="testimonial-box">
              <p>"{testimony}"</p>
              <p>{names[index]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};