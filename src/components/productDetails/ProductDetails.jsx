import QuantityInput from '../quantityInput/QuantityInput';
import { useState, useEffect } from 'react';
import styles from './ProductDetails.module.css';

function useFetchProductDetails(productId) {
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setProductDetails(result);
        console.log(result);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [productId]);

  return { productDetails, error, loading };
}

const ProductDetails = (props) => {
  const { productDetails, error, loading } = useFetchProductDetails(
    props.productId
  );

  const basketEntry = props.basket.filter(
    (item) => item.id === props.productId
  )[0];

  const productQuantity = basketEntry ? basketEntry.quantity : 0;

  console.log(productDetails);

  return (
    <div className={styles.productPage}>
      {loading && <h1>Loading</h1>}
      {productDetails && (
        <div className={styles.productDetails}>
          <div className={styles.imageHolder}>
            <img src={productDetails.image} alt="" />
          </div>
          <div className="infoHolder">
            <h2>{productDetails.title}</h2>
            <h2>£{productDetails.price}</h2>
            <h3>{productDetails.rating.rate} Stars</h3>
            <p>{productDetails.description}</p>
            <QuantityInput
              handleBasketUpdate={props.handleBasketUpdate}
              quantity={productQuantity}
              productId={props.productId}
            ></QuantityInput>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
