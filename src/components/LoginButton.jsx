import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login" style={styles.link}>
      <button style={styles.button}>
        INICIAR SESIÓN
      </button>
    </Link>
  );
};

const styles = {
  button: {
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
  },
};

export default LoginButton;
