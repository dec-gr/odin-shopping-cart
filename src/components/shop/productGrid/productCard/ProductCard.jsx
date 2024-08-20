import styles from './ProductCard.module.css';

const ProductCard = (props) => {
  return (
    <div className={styles.productCardCont}>
      <div className="productImgCont">
        <img src={props.product.image} alt="" />
      </div>
      <div className="productInfo">
        <p>{props.product.title}</p>
        <p>£{props.product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
