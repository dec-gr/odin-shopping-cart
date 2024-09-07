import { useEffect, useState } from 'react';
import FakeComponent from '../FakeComponent';
import { useFetchProductsInBasket } from './fetchBasketUtils';

const MiniBasket = (props) => {
  const { basketProducts, error, loading } = useFetchProductsInBasket(
    props.basket
  );

  // I couldn't figure out how to only fetch data when basket Id's change.
  // I'd always have to compute basketIds off basket so it'll get recomputed everytime basket changes anyway
  // Could store ID's separately in state but then we're duplicating data stored in state

  const numberOfItems = props.basket.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = basketProducts
    ? basketProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="miniBasketCont">
      <p>Basket: {numberOfItems} items</p>
      {loading && <p>Loading</p>}
      {error && <p>Server Error</p>}
      <p>Price: {totalPrice.toFixed(2)}</p>
      <FakeComponent basketProducts={basketProducts}></FakeComponent>
    </div>
  );
};

export default MiniBasket;
