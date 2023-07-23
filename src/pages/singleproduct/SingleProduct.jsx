import React, { useContext } from "react";
import { GradeIcon } from "../../assests";
import "./singleProduct.css";
import { ProductContext } from "../../contexts/ProductContext";

const SingleProduct = () => {
  const {
    state: { productDetails },
  } = useContext(ProductContext);

  const { title, image, price, rating, category, description } = productDetails;

  document.title = `${title} | Cherry Cart`;

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
          <button>ADD TO CART</button>
          <button className="wishlist-btn">ADD TO WISHLIST</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
