import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} style={styles.form}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        🔍
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px 0 0 4px",
    width: "300px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "16px",
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
  },
};

export default SearchBar;
