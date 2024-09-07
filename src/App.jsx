import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { updateValueInBasketArray } from './utils';

import { Outlet } from 'react-router-dom';

import AppCont from './components/appCont/AppCont';
import Shop from './components/shop/Shop';
import NavBar from './components/nav/NavBar';
import MiniBasket from './components/MiniBasket/MiniBasket';
import ProductDetails from './components/productDetails/ProductDetails';

// Basket: [{id: 123, quantity: 99}, {id: 456, quantity 2}]

function App() {
  const [basket, setBasket] = useState([]);

  function handleBasketUpdate(productId, quantity, stepChange = true) {
    let newQuantity;
    if (stepChange) {
      let currentQuantity = basket.filter((item) => item.id === productId)[0];
      newQuantity = Number(
        (currentQuantity ? currentQuantity.quantity : 0) + quantity
      );
    } else {
      newQuantity = Number(quantity);
    }

    if (newQuantity <= 0) {
      setBasket(basket.filter((item) => item.id !== productId));
    } else {
      setBasket(updateValueInBasketArray(basket, productId, newQuantity));
    }
  }

  return (
    <>
      <AppCont>
        <NavBar>
          <MiniBasket basket={basket}></MiniBasket>
        </NavBar>
        <Outlet context={[basket, handleBasketUpdate]} />
        {/* <ProductDetails
          productId={1}
          basket={basket}
          handleBasketUpdate={handleBasketUpdate}
        ></ProductDetails> */}
        {/* <Shop basket={basket} handleBasketUpdate={handleBasketUpdate}></Shop> */}
      </AppCont>
    </>
  );
}

export default App;
