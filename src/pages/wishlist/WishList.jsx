import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./wishlist.css";
import { WishListContext } from "../../contexts/WishListContext";
import ProductCard from "../../components/productcard/ProductCard";

const WishList = () => {
  const {
    wishlistState: { wishlist },
  } = useContext(WishListContext);

  document.title = "Wishlist | Cherry Cart";

  return (
    <div>
      <section>
        <h3>My Favorites ({wishlist.length})</h3>
        {wishlist.length > 0 ? (
          <div className="wishlist-cards">
            {wishlist.map((wishlistProduct) => (
              <ProductCard
                key={wishlistProduct.id}
                products={wishlistProduct}
              />
            ))}
          </div>
        ) : (
          <div>
            <p>Oops! Your wishlist is empty.</p>
            <button>
              <Link to="/store">Explore to store.</Link>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default WishList;
