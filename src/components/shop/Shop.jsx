import styles from './Shop.module.css';
import Sidebar from './sidebar/Sidebar';
import ProductGrid from './productGrid/ProductGrid';
import ProductCard from './productGrid/productCard/ProductCard';
import { useState, useEffect } from 'react';

// {id: 'productID', quantity: 'Quantity'}

const Shop = () => {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [basket, SetBasket] = useState(null);

  //   function handleAddProductToBasket (id) => {

  //     if (id) in

  //   }

  // We need to pull this into it's own component + use that signal thing for clean up
  // We could also have a seperate API call to get a single product
  // or we can just store the big fetch somewhere and pull the single product out when needed.
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => {
        if (response.state >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setProductData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.shopCont}>
      <Sidebar></Sidebar>

      {loading && <h1>Loading...</h1>}
      {error && <p>Error</p>}
      {productData && <ProductGrid productData={productData}></ProductGrid>}
    </div>
  );
};

export default Shop;
