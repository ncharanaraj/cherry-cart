import React from "react";
import {
  FavoriteBorderOutlinedIcon,
  FavoriteOutlinedIcon,
  GradeIcon,
} from "../../assests";
import { Link } from "react-router-dom";
import "./productCard.css";
import { useProduct } from "../../contexts/ProductContext";
import { useWishlist } from "../../contexts/WishListContext";
import { useCart } from "../../contexts/CartContext";

const ProductCard = ({ products }) => {
  const { fetchProductId } = useProduct();
  const { handleAddToWishlist, handleRemoveFromWishlist, productsInWishlist } =
    useWishlist();
  const { handleAddToCart, handleRemoveFromCart, isItemInCart } = useCart();

  const { id, image, title, rating, price } = products;

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="product-image">
          <img src={image} alt="" onClick={() => fetchProductId(id)} />
        </div>
      </Link>
      <div className="product-card-fav-icon">
        {productsInWishlist(id) ? (
          <FavoriteOutlinedIcon
            onClick={() => handleRemoveFromWishlist(id)}
            color="error"
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            onClick={() => handleAddToWishlist(products)}
          />
        )}
      </div>
      <div className="product-body">
        <h4 className="product-title">{title}</h4>
        <div className="product-body-item">
          <p className="product-price">₹{price}</p>
          <div className="product-body-rating">
            <GradeIcon sx={{ color: "var(--warning-color)" }} />
            <span>{rating?.rate}</span>
          </div>
        </div>
        {isItemInCart(id) ? (
          <button
            className="remove-from-cart-btn"
            onClick={() => handleRemoveFromCart(id)}
          >
            REMOVE FROM CART
          </button>
        ) : (
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(products)}
          >
            Add TO CART
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
