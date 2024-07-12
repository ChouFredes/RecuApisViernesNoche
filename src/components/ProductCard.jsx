import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./css/ProductCard.css";
import { CartContext } from "../contexts/shoppingCartContext";

export function ProductCard ({ name, price, id, image}) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, name, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="ps-productCard">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div className="ps-productCard-img-container">
        <img
          src={image}
          alt={name}
          className="ps-productCard-img"
        />
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
        {quantityPerItem === 0 ? (
          <button onClick={() => addToCart()} className="ps-productCard-buyButton">
            Agregar al carrito
          </button>
        ) : (
          <button onClick={() => addToCart()} className="ps-productCard-buyButton">
            Agregar más
          </button>
        )}
        {quantityPerItem > 0 && (
          <button onClick={() => removeItem(id)} className="ps-productCard-removeButton">
            Quitar del carrito
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
