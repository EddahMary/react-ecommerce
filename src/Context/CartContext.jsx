// Adding and removing products from cart
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartValue, setCartValue] = useState([]);
  
  // removing product from the cart
  const removeFromCart = (product) => {
    setCartValue((prevValue) =>
      prevValue.filter((value) => value.id !== product.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartValue, setCartValue, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const Cart = () => useContext(CartContext);
