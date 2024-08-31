import styles from '../productCard/ProductCard.module.css';

const QuantityInput = (props) => {
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
    <div className="quantitySelection">
      <button onClick={() => handleProductMinusOne(props.productId)}>-</button>

      <input
        type="number"
        value={props.quantity}
        onChange={(e) => {
          handleSetProductQuantity(props.productId, e);
        }}
      ></input>

      <button onClick={() => handleProductAddOne(props.productId)}>+</button>
    </div>
  );
};

export default QuantityInput;
