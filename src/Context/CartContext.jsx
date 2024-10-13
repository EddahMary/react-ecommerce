import React, { createContext, useContext } from "react";

export const CartContext = createContext();
 

export const CartProvider = ({ children }) => {

  const [cartValue, setCartValue] = React.useState([]);

  return (
    <CartContext.Provider value={{ cartValue, setCartValue }}>
      {children}

    </CartContext.Provider>
  );
};
export const Cart = () => useContext(CartContext);
