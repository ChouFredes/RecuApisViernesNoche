import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
    console.log("Iniciar sesión");
  };

  return (
    <button onClick={handleLogin} style={styles.button}>
      INICIAR SESIÓN
    </button>
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
    marginRight: "50px",
  },
};

export default LoginButton;
