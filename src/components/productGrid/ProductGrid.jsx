import ProductCard from '../productCard/ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = (props) => {
  return (
    <div className={styles.productGridCont}>
      {props.productData.map((product) => {
        const basketEntry = props.basket.filter(
          (item) => item.id === product.id
        )[0];

        const productQuantity = basketEntry ? basketEntry.quantity : 0;

        return (
          <ProductCard
            product={product}
            key={product.id}
            handleBasketUpdate={props.handleBasketUpdate}
            quantity={productQuantity}
          ></ProductCard>
        );
      })}
    </div>
  );
};

export default ProductGrid;
