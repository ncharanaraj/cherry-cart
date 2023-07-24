const intialState = {
  products: [],
  productDetails: {},
  sortByPrice: "",
  categories: [],
  search: "",
  allCategories: [],
  ratingRange: 5,
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
    case "DISPLAY_CATEGORY":
      return {
        ...state,
        allCategories: payload,
      };
    case "CATEGORY":
      return {
        ...state,
        categories: state.categories.includes(payload)
          ? state.categories.filter((categoryType) => categoryType !== payload)
          : [...state.categories, payload],
      };
    case "SEARCH":
      return {
        ...state,
        search: payload,
      };
    case "SORT_BY_RATING":
      return {
        ...state,
        ratingRange: payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...intialState,
        products: payload.products,
        allCategories: payload.categories,
      };
    default:
      return state;
  }
};

export { intialState, ProductReducer };
