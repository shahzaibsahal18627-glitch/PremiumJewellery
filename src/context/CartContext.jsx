import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        );
      }
      return [...current, { ...product, quantity: Math.min(quantity, product.stock) }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) } : item))
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);

  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
