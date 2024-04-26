import "./App.css";
import { NavBar } from "./components/NavBar";
import { ProductCard } from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import { Contacto } from "./components/páginas/Contacto";
import { Inicio } from "./components/páginas/Inicio";
import { Productos } from "./components/páginas/Productos";

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  );
}
