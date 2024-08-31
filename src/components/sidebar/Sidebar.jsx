import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={styles.sidebarCont}>
      <div className={styles.categoryList}>
        {/* <li>Women's Clothing</li>
          <li>Men's Clothing</li>
          <li>Jewellery</li>
          <li>Electronics</li> */}
        {props.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => props.setCategoryId(category.id)}
            className={category.id === props.categoryId ? styles.active : ''}
          >
            {category.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
