import { useContext } from "react";
import "./productListing.css";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "../../components/productcard/ProductCard";
import ProductFilters from "../../components/filters/ProductFilters";

const ProductListing = () => {
  const {
    state: { products },
  } = useContext(ProductContext);

  document.title = "Store | Cherry Cart";

  return (
    <div className="product-listing-container">
      <sidebar>
        <ProductFilters />
      </sidebar>
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard products={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
