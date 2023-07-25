import { createContext, useEffect, useReducer } from "react";
import {
  initialWishlistState,
  wishlistReducer,
} from "../reducers/WishlistReducer";
import { getWishlistService } from "../services/WishListService";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const getWishlist = async () => {
    try {
      const response = await getWishlistService();
      wishlistDispatch({ type: "DISPLAY_WISHLIST", payload: response.data });
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <WishListContext.Provider value={{ wishlistState }}>
      {children}
    </WishListContext.Provider>
  );
};

export { WishListContext, WishListProvider };
