import { createContext, useContext, useMemo, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    setWishlistItems((current) => {
      if (current.some((item) => item.id === product.id)) return current;
      return [...current, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((current) => current.filter((item) => item.id !== id));
  };

  const moveToCart = (product, addToCart) => {
    removeFromWishlist(product.id);
    addToCart(product, 1);
  };

  const wishlistCount = useMemo(() => wishlistItems.length, [wishlistItems]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, moveToCart, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
