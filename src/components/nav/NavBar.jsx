import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBarCont}>
      <li>Home</li>
      <li>Shop</li>
      <li>Basket</li>
    </div>
  );
};

export default NavBar;
