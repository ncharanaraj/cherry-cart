import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productcard/ProductCard";
import "./productListing.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  const fechData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fechData();
  }, []);

  document.title = "Store | Cherry Cart";

  return (
    <div className="product-listing-container">
      <sidebar></sidebar>
      <div>
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default ProductListing;
