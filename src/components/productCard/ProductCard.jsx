import styles from './ProductCard.module.css';
import QuantityInput from '../quantityInput/QuantityInput';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  // function handleChangeProductQuantity(productId, delta) {
  //   props.handleBasketUpdate(productId, delta);
  // }

  // function handleProductAddOne(productId) {
  //   handleChangeProductQuantity(productId, 1);
  // }

  // function handleProductMinusOne(productId) {
  //   if (props.quantity < 0) return;
  //   handleChangeProductQuantity(productId, -1);
  // }

  // function handleSetProductQuantity(productId, e) {
  //   props.handleBasketUpdate(productId, e.target.value, false);
  // }

  return (
    <div className={styles.productCardCont}>
      <Link
        to={`/product/${props.product.id}`}
        className={styles.productImgCont}
      >
        <div>
          <img src={props.product.image} alt="" />
        </div>
      </Link>
      <div className={styles.productInfo}>
        <p>{props.product.title}</p>
        <p>£{props.product.price}</p>
        <QuantityInput
          handleBasketUpdate={props.handleBasketUpdate}
          quantity={props.quantity}
          productId={props.product.id}
        ></QuantityInput>
      </div>
    </div>
  );
};

export default ProductCard;
