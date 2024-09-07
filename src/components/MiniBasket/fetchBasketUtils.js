import { useState, useEffect } from 'react';

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

export { useFetchProductsInBasket, getProductArray, getProductById };
