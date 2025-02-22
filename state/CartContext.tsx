import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the shape of the context
interface CartContextType {
  cart: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  getCartCount: () => number;
}

// Default values for the context
const defaultCartContext: CartContextType = {
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  getCartCount: () => 0,
};

// Create the Cart Context
const CartContext = createContext<CartContextType>(defaultCartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize cart state with localStorage value if available
  const [cart, setCart] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('shoppingCart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Sync cart state with localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
  }, [cart]); // Only update localStorage when cart changes

  // Add item to cart (ensure no duplicates)
  const addToCart = (item: string) => {
    setCart((prevCart) => {
      // Only add the item if it is not already in the cart
      if (!prevCart.includes(item)) {
        return [...prevCart, item];
      }
      // Return the cart unchanged if the item is already in the cart
      return prevCart;
    });
    const currentCartFromStorage = JSON.parse(localStorage.getItem("shoppingCart") || "[]");

    if (!currentCartFromStorage.includes(item)) {
      currentCartFromStorage.push(item);
      localStorage.setItem("shoppingCart", JSON.stringify(currentCartFromStorage));
    }
  };

  // Remove item from cart
  const removeFromCart = (item: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
  };

  // Get cart count
  const getCartCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
