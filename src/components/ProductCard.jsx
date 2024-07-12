import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "../assets/css/ProductCard.css";

export function ProductCard({ name, price, id, b64 }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const item = cartItems.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addItemToCart({ productId: id, amount: 1 }));
  };

  const handleRemoveFromCart = () => {
    if (item) {
      dispatch(removeItemFromCart({ cartProductId: item.id }));
    }
  };

  return (
    <div className="ps-productCard">
      <div className="ps-productCard-img-container">
        <img src={`data:image/png;base64,${b64}`} alt={name} className="ps-productCard-img" />
      </div>
      <div className="ps-productCard-wrapper">
        <div className="ps-productCard-details">
          <h3 className="ps-productCard-price">${price}</h3>
          <header className="ps-productCard-name">{name}</header>
        </div>

        <div className="ps-productCard-actions">
          <Link to={`/product/${id}`} className="ps-productCard-moreInfo">
            Ver más
          </Link>
          <div className="ps-productCard-cartActions">
            {quantity > 0 && (
              <>
                <button onClick={handleRemoveFromCart} className="ps-productCard-cartButton">-</button>
                <span className="ps-productCard-quantity">{quantity}</span>
              </>
            )}
            <button onClick={handleAddToCart} className="ps-productCard-cartButton">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
