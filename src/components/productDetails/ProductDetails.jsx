import QuantityInput from '../quantityInput/QuantityInput';
import { useState, useEffect } from 'react';
import styles from './ProductDetails.module.css';
import { useOutletContext, useParams, Navigate } from 'react-router-dom';

function isValidId(productId) {
  console.log(productId >= 1 && productId <= 20);
  return productId >= 1 && productId <= 20;
}

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

const ProductDetails = () => {
  const [basket, handleBasketUpdate] = useOutletContext();
  const { productIdStr } = useParams();
  const productId = Number(productIdStr);

  if (!isValidId(productId)) {
    return <Navigate to="/shop" replace={true} />;
  }

  const { productDetails, error, loading } = useFetchProductDetails(productId);

  const basketEntry = basket.filter((item) => item.id === productId)[0];

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
          <div className={styles.infoHolder}>
            <h2 className={styles.title}>{productDetails.title}</h2>
            <h2 className={styles.price}>£{productDetails.price}</h2>
            <h3 className={styles.stars}>{productDetails.rating.rate} Stars</h3>
            <p className={styles.desc}>{productDetails.description}</p>
            <QuantityInput
              handleBasketUpdate={handleBasketUpdate}
              quantity={productQuantity}
              productId={productId}
            ></QuantityInput>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
