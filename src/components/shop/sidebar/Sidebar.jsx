import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebarCont}>
      <div className={styles.categoryList}>
        <ul>
          <li>Women's Clothing</li>
          <li>Men's Clothing</li>
          <li>Jewellery</li>
          <li>Electronics</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
