import styles from './NavBar.module.css';

const NavBar = (props) => {
  return (
    <div className={styles.navBarCont}>
      <li>Home</li>
      <li>Shop</li>
      <li>Basket</li>
      <li>{props.children}</li>
    </div>
  );
};

export default NavBar;
