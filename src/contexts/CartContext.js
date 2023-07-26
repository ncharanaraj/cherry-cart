import React, { createContext, useEffect, useReducer } from "react";
import { cartReducer, initialCartState } from "../reducers/CartReducer";
import { getProducts } from "../services/ProductService";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const getCart = async () => {
    try {
      const response = await getProducts();
      cartDispatch({ type: "DISPLAY_CART", payload: response.data });
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleAddToCart = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
