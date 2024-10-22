import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerCont}>
      <div className={styles.siteInfo}>
        <p>© 2024 Apparel Co. All rights reserved.</p>
      </div>
      <div className={styles.siteLinksCont}>
        <ul className={styles.siteLinks}>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className={styles.socialLinksDiv}>
        <ul className={styles.socialLinksList}>
          <li>
            <a href="https://www.instagram.com">
              <img src="/assets/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <img src="/assets/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com">
              <img src="/assets/tiktok.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
