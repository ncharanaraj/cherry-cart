import React, { useContext } from "react";
import { GradeIcon } from "../../assests";
import { Link } from "react-router-dom";
import "./productCard.css";
import { ProductContext } from "../../contexts/ProductContext";

const ProductCard = ({ products }) => {
  const { fetchProductId } = useContext(ProductContext);

  const { id, image, title, rating, price } = products;

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="product-image">
          <img src={image} alt="" onClick={() => fetchProductId(id)} />
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
