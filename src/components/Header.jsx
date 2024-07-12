import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";

import logo from "../assets/technologyHouse.png";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <img src={logo} alt="Technology House logo" style={styles.logo} />
        <SearchBar />
        <div style={styles.actions}>
          <LoginButton />
        </div>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          INICIO
        </Link>
        <Link to="/products" style={styles.navLink}>
          PRODUCTOS
        </Link>
        <Link to="/contact" style={styles.navLink}>
          CONTACTO
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "rgba(214, 210, 217, 0.852)",
    padding: "20px 0px",
    boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
  },
  logo: {
    height: "50px",
    paddingLeft: "30px",
    paddingBottom: "10px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#007BFF",
    padding: "10px 0",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "0 20px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Header;
