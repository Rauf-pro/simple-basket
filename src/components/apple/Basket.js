import React from "react";
import Apple from "./images/alma.jpg";
import { useApple } from "../../context/AppleContext";

const Basket = () => {
  const {
    count,
    increaseCount,
    decrementCount,
    addBasket,
    basketCount,
    price,
  } = useApple();

  const calculatedPrice = count === 0 ? price : count * price;
  return (
    <div className="basket-wrapper">
      <img src={Apple} width={150} height={150} alt="" />
      <h3>Guba Apples</h3>
      <p>${calculatedPrice}</p>
      <div className="d-flex gap-3 align-items-center mb-3">
        <button onClick={increaseCount} className="button">
          +
        </button>
        <span>{count}</span>
        <button onClick={decrementCount} className="button">
          -
        </button>
      </div>
      <button onClick={addBasket} className="button">
        Add
      </button>
    </div>
  );
};

export default Basket;
