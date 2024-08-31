import QuantityInput from '../quantityInput/QuantityInput';

const ProductDetails = (props) => {
  const basketEntry = props.basket.filter(
    (item) => item.id === props.productId
  )[0];

  const productQuantity = basketEntry ? basketEntry.quantity : 0;

  console.log('Basket');
  console.log(props.basket);

  return (
    <div className="productDetails">
      <div className="imageHolder">
        <img src="" alt="" />
      </div>
      <div className="infoHolder">
        <h2>Product Title</h2>
        <h2>£100</h2>
        <p>Product Details</p>
        <QuantityInput
          handleBasketUpdate={props.handleBasketUpdate}
          quantity={productQuantity}
          productId={props.productId}
        ></QuantityInput>
      </div>
    </div>
  );
};

export default ProductDetails;
