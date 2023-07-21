import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GradeIcon } from "../../assests";
import "./singleProduct.css";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [productId]);

  const { title, image, price, rating, category, description } = products;

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
