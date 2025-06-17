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

  
  const removeFromCart = (productID) => {
    const updated = cartItems.filter((item)=> item.id !== productID);
    setCartItems(updated);

    const total = updated.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  };

  const updatedCart = (productID, newQuantity) => {
    const updated = cartItems.map((item) =>
      item.id === productID ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);

    const total = updated.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalQuantity, setTotalQuantity, addToCart, setCartItems, removeFromCart, updatedCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;