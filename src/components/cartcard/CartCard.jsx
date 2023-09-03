import React from "react";
import "./cartCard.css";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishListContext";

const CartCard = ({ cartProducts }) => {
  const { handleRemoveFromCart } = useCart();
  const { handleAddToWishlist } = useWishlist();
  const { id, image, title, price } = cartProducts;
  return (
    <div className="cart-card">
      <img className="cart-card-image" src={image} alt={title} />
      <div className="cart-card-details">
        <h3>{title}</h3>
        <p>Price: ₹{price}</p>
        <div>
          <button onClick={() => handleAddToWishlist(cartProducts)}>
            ADD TO WISHLIST
          </button>
          <button
            className="remove-from-cart-btn"
            onClick={() => handleRemoveFromCart(id)}
          >
            REMOVE FROM CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
