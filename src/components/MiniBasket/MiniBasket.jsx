import { useEffect, useState } from 'react';

// function useFetchProductById(productId) {
//   const [productPrice, setProductPrice] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${productId}`, { mode: 'cors' })
//       .then((response) => {
//         if (response.state >= 400) {
//           throw new Error('server error');
//         }
//         return response.json();
//       })
//       .then((response) => setProductPrice(response.price))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return { [productId]: productPrice };
// }

// function useFetchProductPriceMap(basket) {
//   const priceMap = basket.map((product) => useFetchProductById(product.id));
//   return { priceMap };
// }

const MiniBasket = (props) => {
  const numberOfItems = props.basket.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  //   const priceMap = useFetchProductPriceMap(props.basket);
  //   console.log(priceMap);

  //This function is messed up, Needs fixing
  //We want to fetch a price map (altho only when the set of basketId's change)
  //Then use the map in a reduce function to calculate total price of the basket

  //   useEffect(() => {
  //     function fetchItemById(itemId) {
  //       fetch(`https://fakestoreapi.com/products/${itemId}`)
  //         .then((res) => res.json())
  //         .then((res) =>.price);
  //     }

  //     const prices = basket.map((item) => )
  //   });

  return <p>Basket: {numberOfItems} items</p>;
};

export default MiniBasket;
