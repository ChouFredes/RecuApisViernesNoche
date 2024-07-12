// NavBar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";
import { CartContext } from "../contexts/shoppingCartContext";

const NavBar = () => {


  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0);

  return (
    <nav className="navBar">
      <Link to="/" className="page-name">Technology House</Link>
      <ul className="nb-links">
        <li>
          <Link to="/" className="nb-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/products" className="nb-link">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nb-link">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
