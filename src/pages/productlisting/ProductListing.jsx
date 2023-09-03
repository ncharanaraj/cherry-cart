import "./productListing.css";
import { useProduct } from "../../contexts/ProductContext";
import ProductCard from "../../components/productcard/ProductCard";
import ProductFilters from "../../components/filters/ProductFilters";

const ProductListing = () => {
  const { filterByRating: filteredProducts } = useProduct();

  document.title = "Store | Cherry Cart";

  return (
    <div className="product-listing-container">
      <div className="sidebar">
        <ProductFilters />
      </div>
      <div>
        {filteredProducts.length > 0 ? (
          <div className="product-cards">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
          </div>
        ) : (
          <p>Oops! We don't have any products that match your preference.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
