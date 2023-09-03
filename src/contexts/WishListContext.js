import { createContext, useContext, useReducer } from "react";
import {
  initialWishlistState,
  wishlistReducer,
} from "../reducers/WishlistReducer";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const handleAddToWishlist = (products) => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: products });
  };

  const handleRemoveFromWishlist = (productID) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: productID });
  };

  const productsInWishlist = (productId) =>
    wishlistState.wishlist.find((product) => product.id === productId);

  return (
    <WishListContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        productsInWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishListProvider };
