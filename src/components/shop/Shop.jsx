import styles from './Shop.module.css';
import Sidebar from '../sidebar/Sidebar';
import ShopContent from '../shopContent/ShopContent';
import ProductCard from '../productCard/ProductCard';
import MiniBasket from '../MiniBasket/MiniBasket';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

// {id: 'productID', quantity: 'Quantity'}

const baseUrl = 'https://fakestoreapi.com/products';

const categories = [
  { id: 0, value: 'All', url: '/' },
  { id: 1, value: "Men's Clothing", url: "/category/men's%20clothing" },
  { id: 2, value: "Women's Clothing", url: "/category/women's%20clothing" },
  { id: 3, value: 'Jewelery', url: '/category/jewelery' },
  { id: 4, value: 'Electronics', url: '/category/electronics' },
];

function useFetchAllProducts(categoryId) {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //   TODO - turn sidebar list items into a selectable list
  //   add state back in here with the category value
  //   Fetch different date based on category + url extension above.
  //   Have the data refresh everytime we click (this should probably be an
  // on click handler since it isn't really a render thing)
  //   const [categoryId, setCategoryId] = useState(0);

  // I don't think this needs an abort because it's just storing the state in this function and return it every time
  // If we had it inside of the react component then it would need an abort to stop a slower call updating the state
  // But that's not what we're doing.
  // https://blog.logrocket.com/modern-api-data-fetching-methods-react/
  useEffect(() => {
    fetch(baseUrl + categories.find((x) => x.id === categoryId).url, {
      mode: 'cors',
    })
      .then((response) => {
        if (response.state >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => {
        setProductData(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { productData, error, loading };
}

const Shop = () => {
  //   function handleAddProductToBasket (id) => {

  //     if (id) in

  //   }

  // We need to pull this into it's own component + use that signal thing for clean up
  // We could also have a seperate API call to get a single product
  // or we can just store the big fetch somewhere and pull the single product out when needed.

  // This should only be called on initial render. How do we do that with a custom hook like we would with use

  const [categoryId, setCategoryId] = useState(0);

  const { productData, error, loading } = useFetchAllProducts(categoryId);

  const [basket, handleBasketUpdate] = useOutletContext();

  return (
    <div className={styles.shopCont}>
      <Sidebar
        categories={categories}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      ></Sidebar>
      {loading && <h1>Loading...</h1>}
      {error && <p>Error</p>}
      {productData && (
        <ShopContent
          productData={productData}
          basket={basket}
          handleBasketUpdate={handleBasketUpdate}
        ></ShopContent>
      )}
    </div>
  );
};

export default Shop;
