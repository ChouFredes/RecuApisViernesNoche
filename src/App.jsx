import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { Product } from "./components/pages/Product";
import { Products } from "./components/pages/Products";
import { Cart } from "./components/Cart";
import { ShoppingCartProvider } from "./contexts/shoppingCartContext";

export function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShoppingCartProvider>
  );
}
