import { createContext, useContext, useState } from "react";

const AppleContext = createContext();

export const AppleProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(1.49);
  const [basketCount, setBasketCount] = useState(null);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const addBasket = () => {
    setBasketCount(count);
  };

  return (
    <AppleContext.Provider
      value={{
        count,
        increaseCount,
        decrementCount,
        addBasket,
        basketCount,
        price,
      }}
    >
      {children}
    </AppleContext.Provider>
  );
};

export const useApple = () => {
  return useContext(AppleContext);
};
