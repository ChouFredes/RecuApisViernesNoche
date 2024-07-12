import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import ContactInfo from "./components/ContactInfo";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard"
import CustomerDashboard from "./pages/CustomerDashboard"
import Register from "./components/Register";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      saveCartToBackend(cart);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cart]);

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute roles={['ADMIN']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
          <Route element={<PrivateRoute roles={['CUSTOMER']} />}>
            <Route path="/customer" element={<CustomerDashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
      <ContactInfo />
    </div>
  );
}

export default App;