import React from "react";
import { useBasket } from "../context/BasketContext";

const BasketComponent = () => {
  const { basket, addToBasket, removeFromBasket } = useBasket();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-3">
      <h2 className="">Items in Basket:</h2>
      <button
        onClick={() => addToBasket(`Item ${basket.length + 1}`)}
        className="bg-primary text-white rounded-2 mb-3 "
      >
        Add Item
      </button>
      <ul className="d-flex flex-column gap-2">
        {basket.map((item, index) => (
          <li key={index} className="">
            {item}{" "}
            <button
              onClick={() => removeFromBasket(index)}
              className="bg-danger text-white rounded-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketComponent;
