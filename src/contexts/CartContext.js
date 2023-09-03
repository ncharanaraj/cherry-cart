import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, initialCartState } from "../reducers/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const handleAddToCart = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleRemoveFromCart = (productID) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: productID });
  };

  const isItemInCart = (productID) => {
    return cartState.cart.some((item) => item.id === productID);
  };

  const totalPriceWithoutDeliveryCharge = cartState.cart.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  const cartTotal = totalPriceWithoutDeliveryCharge + 40;

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        handleAddToCart,
        handleRemoveFromCart,
        isItemInCart,
        totalPriceWithoutDeliveryCharge,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
