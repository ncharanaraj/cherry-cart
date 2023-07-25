const initialWishlistState = {
  products: [],
  wishlist: [],
};

const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};

export { initialWishlistState, wishlistReducer };
