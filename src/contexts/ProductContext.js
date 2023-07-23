import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import { ProductReducer, intialState } from "../reducers/ProductReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, intialState);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({ type: "DISPLAY_PRODUCTS", payload: response.data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;

export { ProductContext, ProductProvider };
