import React from "react";
import { BasketProvider } from "./context/BasketContext";
import BasketComponent from "./components/BasketComponent";
import Header from "./components/apple/Header";
import Basket from "./components/apple/Basket";
import { AppleProvider } from "./context/AppleContext";

function App() {
  return (
    <>
      <AppleProvider>
        <Header />
        <Basket />
      </AppleProvider>

      {/* <BasketProvider>
        <div className="App">
          <h1 className="text-center pb-3">Basket App</h1>
          <BasketComponent />
        </div>
      </BasketProvider> */}
    </>
  );
}

export default App;
