import "./App.css";
import NavBar from "./components/NavBar";
import { ProductCard } from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import {Product} from "./components/pages/Product"
import { Products } from "./components/pages/Products";
 

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        
      </Routes>
    </>
  );
}
