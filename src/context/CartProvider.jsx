import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

const addToCart = (productID) => {
  const alreadyInCart = cartItems.some(item => item.id === productID);

  if (alreadyInCart) {
    cartItems.find(item => item.id === productID).quantity ++;
    return;
  }

  setCartItems([...cartItems, { id: productID, quantity: 1 }]);
  setTotalQuantity(totalQuantity + 1);
};

  
  const removeFromCart = (productId) => {
    setTotalQuantity(totalQuantity - 1);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalQuantity, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;