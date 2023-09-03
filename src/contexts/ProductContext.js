import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ProductReducer, intialState } from "../reducers/ProductReducer";
import {
  getProductId,
  getProducts,
  getProductCategories,
} from "../services/ProductService";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, intialState);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      dispatch({ type: "DISPLAY_PRODUCTS", payload: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductId = async (productId) => {
    try {
      const response = await getProductId(productId);
      dispatch({ type: "GET_PRODUCT_DETAILS", payload: response.data });
    } catch (error) {
      console.error("Error fetching products by Id:", error);
    }
  };

  const fetchProductCategories = async () => {
    try {
      const response = await getProductCategories();
      dispatch({ type: "DISPLAY_CATEGORY", payload: response.data });
    } catch (error) {
      console.error("Error fetching products categories:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchProductCategories();
    fetchProductId();
  }, []);

  const filterBySearch = state.search
    ? state.products.filter(({ title }) =>
        title.toLowerCase().includes(state.search.toLowerCase())
      )
    : state.products;

  const filterByCategories =
    state.categories.length > 0
      ? filterBySearch.filter((product) =>
          state.categories.some((catType) => product.category === catType)
        )
      : filterBySearch;

  const filterSortByPrice = state.sortByPrice
    ? filterByCategories.sort((productOne, productTwo) =>
        state.sortByPrice === "lowtohigh"
          ? productOne.price - productTwo.price
          : productTwo.price - productOne.price
      )
    : filterByCategories;

  const filterByRating = filterSortByPrice.filter(
    (product) => product?.rating.rate <= state.ratingRange
  );

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        fetchProductId,
        filterByRating,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
