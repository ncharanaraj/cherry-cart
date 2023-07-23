import React from "react";
import { GradeIcon } from "../../assests";
import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ products }) => {
  const { id, image, title, rating, price } = products;
  return (
    <div key={id} className="product-card">
      <Link to={`/product/${id}`}>
        <div className="product-image">
          <img src={image} alt="" />
        </div>
      </Link>
      <div className="product-body">
        <h4>{title}</h4>
        <div className="product-body-item">
          <p className="product-price">₹{price}</p>
          <div className="product-body-rating">
            <GradeIcon sx={{ color: "var(--warning-color)" }} />
            <span>{rating.rate}</span>
          </div>
        </div>
        <button className="add-to-cart-btn">Add TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
