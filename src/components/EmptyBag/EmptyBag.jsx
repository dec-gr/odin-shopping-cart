import Icon from '@mdi/react';
import { mdiBasketOutline } from '@mdi/js';
import styles from './EmptyBag.module.css';

const EmptyBag = () => {
  const hello = 2;

  return (
    <div className={styles.emptyBagCont}>
      <div className={styles.emptyCard}>
        <div className={styles.bagIcon}>
          <Icon path={mdiBasketOutline} size={2} />
        </div>
        <div className={styles.emptyText}>
          <h3>Your bag is empty</h3>
        </div>
      </div>
    </div>
  );
};

export default EmptyBag;
