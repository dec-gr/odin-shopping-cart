import ProductGrid from '../productGrid/ProductGrid';
import SortBySelector from '../sortBySelector/SortBySelector.jsx';
import styles from './ShopContent.module.css';
import { useState } from 'react';

const sortByList = [
  { id: 0, value: 'Default' },
  { id: 1, value: 'Price Ascending' },
  { id: 2, value: 'Price Descending' },
];

const sortProductData = (productData, sortValue) => {
  if (sortValue === 'Price Ascending') {
    return productData.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'Price Descending') {
    return productData.sort((a, b) => b.price - a.price);
  } else {
    return productData;
  }
};

const ShopContent = (props) => {
  const [sortOptionId, setSortOptionId] = useState('Default');

  const sortedProductData = sortProductData(props.productData, sortOptionId);

  return (
    <div className={styles.shopContentCont}>
      <SortBySelector
        sortOptionId={sortOptionId}
        setSortOptionId={setSortOptionId}
        sortByList={sortByList}
      ></SortBySelector>
      <ProductGrid
        sortedProductData={sortedProductData}
        basket={props.basket}
        handleBasketUpdate={props.handleBasketUpdate}
      ></ProductGrid>
    </div>
  );
};

export default ShopContent;
