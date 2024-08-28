import styles from './SortBySelector.module.css';
import { useState } from 'react';

const categoryList = [
  { name: 'All', id: 0, value: 'All' },
  { name: "Men's Clothing", id: 1, value: "Men's Clothing" },
  { name: "Womens's Clothing", id: 2, value: "Womens's Clothing" },
  { name: 'Jewellery', id: 3, value: 'Jewellery' },
  { name: 'Electronics', id: 4, value: 'Electronics' },
];

const SortBySelector = (props) => {
  return (
    <div className={styles.sortByCont}>
      <label>
        Sort By:{' '}
        <select
          value={props.sortOptionId}
          onChange={(e) => {
            props.setSortOptionId(e.target.value);
          }}
        >
          {props.sortByList.map((sortOption) => (
            <option key={sortOption.id} value={sortOption.value}>
              {sortOption.value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SortBySelector;
