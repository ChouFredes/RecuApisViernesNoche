import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, addItemToCart, removeItemFromCart, emptyCart } from '../redux/slices/cartSlice';
import '../assets/css/Cart.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => 
    state.cart.items.reduce((total, item) => total + item.totalPrice, 0)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleAddItem = (item) => {
    dispatch(addItemToCart({ productId: item.id, amount: 1 }));
  };

  const handleRemoveItem = (id) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      dispatch(removeItemFromCart({ cartProductId: item.id }));
    }
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const handleConfirmPurchase = () => {
    dispatch(emptyCart());
    alert('Compra confirmada!');
  };

  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.totalPrice.toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleAddItem(item)} className="add-button">+</button>
                  <button onClick={() => handleRemoveItem(item.id)} className="remove-button">-</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button onClick={handleEmptyCart} className="empty-cart-button">Vaciar Carrito</button>
            <button onClick={handleConfirmPurchase} className="confirm-purchase-button">Confirmar Compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
