import ProductCard from './productCard/ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = (props) => {
  return (
    <div className={styles.productGridCont}>
      {props.productData.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default ProductGrid;
