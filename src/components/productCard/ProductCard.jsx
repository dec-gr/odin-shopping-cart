import styles from './ProductCard.module.css';
import QuantityInput from '../quantityInput/QuantityInput';

const ProductCard = (props) => {
  function handleChangeProductQuantity(productId, delta) {
    props.handleBasketUpdate(productId, delta);
  }

  function handleProductAddOne(productId) {
    handleChangeProductQuantity(productId, 1);
  }

  function handleProductMinusOne(productId) {
    if (props.quantity < 0) return;
    handleChangeProductQuantity(productId, -1);
  }

  function handleSetProductQuantity(productId, e) {
    props.handleBasketUpdate(productId, e.target.value, false);
  }

  return (
    <div className={styles.productCardCont}>
      <div className="productImgCont">
        <img src={props.product.image} alt="" />
      </div>
      <div className="productInfo">
        <p>{props.product.title}</p>
        <p>£{props.product.price}</p>
        <p>Prod Id: {props.product.id}</p>
        {/* <div className="quantitySelection">
          <button onClick={() => handleProductMinusOne(props.product.id)}>
            -
          </button>

          <input
            type="number"
            value={props.quantity}
            onChange={(e) => {
              handleSetProductQuantity(props.product.id, e);
            }}
          ></input>

          <button onClick={() => handleProductAddOne(props.product.id)}>
            +
          </button>
        </div> */}
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
