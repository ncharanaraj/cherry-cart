import React from "react";
import { GradeIcon } from "../../assests";
import "./singleProduct.css";
import { useProduct } from "../../contexts/ProductContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishListContext";

const SingleProduct = () => {
  const {
    state: { productDetails },
  } = useProduct();

  const { handleAddToCart, isItemInCart } = useCart();

  const { handleAddToWishlist, productsInWishlist } = useWishlist();

  const { id, title, image, price, rating, category, description } =
    productDetails;

  document.title = `${title} | Cherry Cart`;

  const handleCartAction = () => {
    if (productDetails) {
      if (!isItemInCart(id)) {
        handleAddToCart(productDetails);
      }
    }
  };

  const handleWishlistAction = () => {
    if (productDetails) {
      if (!productsInWishlist(id)) {
        handleAddToWishlist(productDetails);
      }
    }
  };

  return (
    <div className="single-product-container">
      <div className="single-product-image">
        <img src={image} alt="" />
      </div>
      <div className="single-product-body">
        <h3>{title}</h3>
        <hr />
        <div className="single-product-body-item">
          <p className="single-product-body-price">₹{price}</p>
          <div>
            <GradeIcon
              sx={{ color: "var(--warning-color)", fontSize: "1.75rem" }}
            />
            <span>{rating?.rate}</span>
          </div>
          <p className="single-product-body-category">{category}</p>
        </div>
        <hr />
        <p>{description}</p>
        <hr />
        <div className="single-product-body-btns">
          {isItemInCart(id) ? (
            <button>IN CART</button>
          ) : (
            <button onClick={handleCartAction}>ADD TO CART</button>
          )}
          {productsInWishlist(id) ? (
            <button>IN WISHLIST</button>
          ) : (
            <button className="wishlist-btn" onClick={handleWishlistAction}>
              ADD TO WISHLIST
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
