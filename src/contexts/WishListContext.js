import { createContext, useEffect, useReducer, useState } from "react";
import {
  initialWishlistState,
  wishlistReducer,
} from "../reducers/WishlistReducer";
import { getProducts } from "../services/ProductService";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const getWishlist = async () => {
    try {
      const response = await getProducts();
      wishlistDispatch({ type: "DISPLAY_PRODUCTS", payload: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const productsInWishlist = (productId) =>
    wishlistState.wishlist.find((product) => product.id === productId);

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <WishListContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        productsInWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export { WishListContext, WishListProvider };
