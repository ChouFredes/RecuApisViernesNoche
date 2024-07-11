import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/shoppingCartContext";
import "./css/Cart.css";

export function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  // Calcular la cantidad total de productos en el carrito
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // Calcular el precio total con o sin descuento
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  const discountedPrice = totalPrice * 0.95;

  // Aplicar descuento si hay más de 5 elementos en el carrito
  if (quantity > 5 && !discountApplied) {
    setDiscountApplied(true);
  }

  // Función para renderizar la lista de productos en el carrito
  const setProductList = (cart) => {
    return cart.map((item) => (
      <div key={item.id} className="cart-item">
        <div className="cart-item-name">
          {item.name}: {item.quantity}
        </div>
      </div>
    ));
  };

  // Manejar el proceso de checkout
  const handleCheckout = () => {
    setCart([]);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="cart-container">
      <div>
        <div>Productos en carrito: {quantity}</div>
        <div>{setProductList(cart)}</div>
        <div>Total: ${discountApplied ? discountedPrice : totalPrice}</div>
        {discountApplied && (
          <div className="discount-message">¡Descuento del 5% aplicado!</div>
        )}
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <p>Compra realizada con éxito</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
