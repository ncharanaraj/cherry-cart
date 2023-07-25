import React, { useContext } from "react";
import {
  FavoriteBorderOutlinedIcon,
  FavoriteOutlinedIcon,
  GradeIcon,
} from "../../assests";
import { Link } from "react-router-dom";
import "./productCard.css";
import { ProductContext } from "../../contexts/ProductContext";
import { WishListContext } from "../../contexts/WishListContext";

const ProductCard = ({ products }) => {
  const { fetchProductId } = useContext(ProductContext);
  const { wishlistDispatch, productsInWishlist } = useContext(WishListContext);

  const { id, image, title, rating, price } = products;

  const handleAddToWishlist = () => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: products });
  };

  const handleRemoveFromWishlist = () => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

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
            onClick={handleRemoveFromWishlist}
            color="error"
          />
        ) : (
          <FavoriteBorderOutlinedIcon onClick={handleAddToWishlist} />
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
        <button className="add-to-cart-btn">Add TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
