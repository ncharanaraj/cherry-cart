const intialState = {
  products: [],
  productDetails: {},
};

const ProductReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    case "GET_PRODUCT_DETAILS":
      return {
        ...state,
        productDetails: payload,
      };
    default:
      return state;
  }
};

export { intialState, ProductReducer };
