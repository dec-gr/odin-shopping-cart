import styles from './AppCont.module.css';

const AppCont = (props) => {
  return <div className={styles.appCont}>{props.children}</div>;
};

export default AppCont;
