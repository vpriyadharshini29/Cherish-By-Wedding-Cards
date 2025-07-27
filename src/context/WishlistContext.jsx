// src/context/WishlistContext.jsx
import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.title === product.title);
      if (exists) {
        return prev.filter((item) => item.title !== product.title);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, selectedProduct, setSelectedProduct }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
