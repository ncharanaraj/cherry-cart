const intialState = {
  products: [],
  productDetails: {},
  sortByPrice: "",
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
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortByPrice: payload,
      };
    default:
      return state;
  }
};

export { intialState, ProductReducer };
