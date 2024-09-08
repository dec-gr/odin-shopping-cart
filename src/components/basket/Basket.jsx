import styles from './Basket.module.css';
import { useOutletContext } from 'react-router-dom';
import { useFetchProductsInBasket } from '../MiniBasket/fetchBasketUtils';
import QuantityInput from '../quantityInput/QuantityInput';

// <div className={styles.productDetails}>
//           <div className={styles.imageHolder}>
//             <img src={productDetails.image} alt="" />
//           </div>
//           <div className="infoHolder">
//             <h2>{productDetails.title}</h2>
//             <h2>£{productDetails.price}</h2>
//             <h3>{productDetails.rating.rate} Stars</h3>
//             <p>{productDetails.description}</p>
//             <QuantityInput
//               handleBasketUpdate={handleBasketUpdate}
//               quantity={productQuantity}
//               productId={productId}
//             ></QuantityInput>

const Basket = () => {
  const [basket, handleBasketUpdate, clearBasket] = useOutletContext();

  const basketEmpty = basket === undefined || basket.length === 0;

  const { basketProducts, error, loading } = useFetchProductsInBasket(basket);

  const totalPrice = basketProducts
    ? basketProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  console.log(`Total PRice is ${totalPrice}`);
  console.log(basketProducts);
  return (
    <div className="checkoutCont">
      {!basketEmpty && basketProducts && (
        <div className={styles.basketCont}>
          <div className={styles.basketContents}>
            <div className={`${styles.bagHeader} ${styles.basketCard}`}>
              MY BAG
            </div>

            <div className={styles.basketItemList}>
              {basketProducts.map((basketItem) => {
                return (
                  <div
                    className={`${styles.basketCard} ${styles.basketItemCont}`}
                    key={basketItem.id}
                  >
                    <div className={styles.basketItemImgCont}>
                      <img src={basketItem.image} alt="" />
                    </div>
                    <div className={styles.itemInfo}>
                      <h2>{basketItem.title}</h2>
                      <h2>{basketItem.price}</h2>
                      <QuantityInput
                        handleBasketUpdate={handleBasketUpdate}
                        quantity={basketItem.quantity}
                        productId={basketItem.id}
                      ></QuantityInput>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.basketSummary}>
            <h3>Total</h3>
            <h4>£{totalPrice.toFixed(2)}</h4>
            {!basketEmpty && (
              <button onClick={() => clearBasket()}>Checkout</button>
            )}
          </div>
        </div>
      )}
      {basketEmpty && <h2>Basket is Empty!</h2>}
    </div>
  );
};

export default Basket;
