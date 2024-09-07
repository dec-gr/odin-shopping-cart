import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className={styles.navBarCont}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="shop">Shop</Link>
      </li>
      <li>
        <Link to="basket">Basket</Link>
      </li>
      <li>{props.children}</li>
    </div>
  );
};

export default NavBar;
