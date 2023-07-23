import React, { createContext, useEffect, useReducer } from "react";
import { ProductReducer, intialState } from "../reducers/ProductReducer";
import { getProductId, getProducts } from "../services/ProductService";

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterSortByPrice = state.sortByPrice
    ? state.products.sort((productOne, productTwo) =>
        state.sortByPrice === "lowtohigh"
          ? productOne.price - productTwo.price
          : productTwo.price - productOne.price
      )
    : state.products;

  return (
    <ProductContext.Provider value={{ state, dispatch, fetchProductId }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export { ProductContext, ProductProvider };
