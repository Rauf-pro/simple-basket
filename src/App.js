import React from 'react';
import { BasketProvider } from './context/BasketContext';
import BasketComponent from './components/BasketComponent';

function App() {
  return (
    <BasketProvider>
      <div className="App">
        <h1 className='text-center pb-3'>Basket App</h1>
        <BasketComponent />
      </div>
    </BasketProvider>
  );
}

export default App;
