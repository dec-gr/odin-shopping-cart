import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.homeCont}>
      <div className={styles.homeLeftDiv}>
        <h1>Apparael Co.</h1>
        <h2>Fashion for Every Day.</h2>
        <button>
          <h2>
            <Link to="shop">Shop Now</Link>
          </h2>
        </button>
      </div>
      <div className={styles.homeRightDiv}>
        <img src="src/assets/fleeceRack.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
