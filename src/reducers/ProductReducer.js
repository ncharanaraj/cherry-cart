const intialState = {
  products: [],
};

const ProductReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export { intialState, ProductReducer };
