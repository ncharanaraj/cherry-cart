const initialWishlistState = {
  wishlist: [],
};

const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_WISHLIST":
      return {
        ...state,
        wishlist: payload,
      };
    case "ADD_TO_WISHLIST":
      const uniqueWishlist = payload.reduce(
        (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
        []
      );
      return {
        ...state,
        wishlist: [uniqueWishlist],
      };
    default:
      return state;
  }
};

export { initialWishlistState, wishlistReducer };
