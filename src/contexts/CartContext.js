import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("Cart"));
  const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);
  useEffect(
    function () {
      localStorage.setItem("Cart", JSON.stringify(cart));
    },
    [cart]
  );
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
