import React, { createContext, useState, useContext } from 'react';

// Create a context for the basket
export const BasketContext = createContext();

// Create a provider component to provide the basket and related functions to child components
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeFromBasket = (itemIndex) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(itemIndex, 1);
    setBasket(updatedBasket);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

// Custom hook to access the basket context in components
export const useBasket = () => {
  return useContext(BasketContext);
};
