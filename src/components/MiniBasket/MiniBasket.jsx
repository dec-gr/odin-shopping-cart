import { useEffect, useState } from 'react';
import FakeComponent from '../FakeComponent';

const getProductById = async (product) => {
  const res = await fetch(`https://fakestoreapi.com/products/${product.id}`);
  const productDetails = await res.json();
  productDetails['quantity'] = product.quantity;
  return productDetails;
};

const getProductArray = async (basket) => {
  const productArray = await Promise.all(
    basket.map((product) => getProductById(product))
  );

  return productArray;
};

function useFetchProductsInBasket(basket) {
  const [basketProducts, setBasketProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductArray(basket)
      .then((result) => {
        setBasketProducts(result);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [basket]);

  return { basketProducts, error, loading };
}

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
