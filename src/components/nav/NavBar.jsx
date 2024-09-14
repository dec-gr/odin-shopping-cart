import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className={styles.navBarCont}>
      <li>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="shop">Shop</Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="basket">{props.children}</Link>
        </h2>
      </li>
    </div>
  );
};

export default NavBar;
