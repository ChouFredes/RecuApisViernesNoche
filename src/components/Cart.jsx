import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import "./css/Cart.css";

export function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

    // Función para agregar un producto al carrito, si existe suma +1 y sino, lo agrega al array.
  const addToCart = (product) => {
    const existingProduct = cartProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
      setCartProducts([...cartProducts]);
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }

    // Verificar si se aplica el descuento, suponemos descuento del 15% a partir de 3 productos
    if (cartProducts.length + 1 > 3) {
      setDiscountApplied(true);
    }
  };

  const finalizePurchase = () => {
    setCartProducts([]);
    setDiscountApplied(false);
    setPurchaseComplete(true);
  };

  const calculateTotal = () => {
    const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
    return discountApplied ? totalPrice * 0.85 : totalPrice;
  };

  const renderCartProducts = () => {
    return cartProducts.map((product, index) => (
      <div key={index} className="cart-item">
        <img src={product.image} alt={product.name} className="cart-item-image" />
        <div className="cart-item-details">
          <h3>{product.name}</h3>
          <p>${product.price} x {product.quantity}</p>
        </div>
      </div>
    ));
  };

    // Función para vaciar el carrito y mostrar el mensaje de compra realizada
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {renderCartProducts()}
          {discountApplied && <p>¡15% de descuento aplicado!</p>}
          <p>Total: ${calculateTotal()}</p>
          <button onClick={finalizePurchase}>Finalizar compra</button>
          {purchaseComplete && <p>¡Tu compra fue realizada con éxito!</p>}
        </>
      )}
    </div>
  );
}

export default Cart;
