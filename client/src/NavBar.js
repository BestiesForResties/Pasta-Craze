import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/" className={`${styles.navLink} ${styles.squareButton}`}>Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/menu" className={`${styles.navLink} ${styles.squareButton}`}>Menu</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/contact" className={`${styles.navLink} ${styles.squareButton}`}>Contact</Link>
          </li>
        </ul>
        <div className={styles.logoContainer}>
          <img src="img/logo.png" alt="Pasta Craze Logo" className={styles.logo} />
        </div>
        <div className={styles.actionsContainer}>
          <Link to="/signin" className={`${styles.signInLink} ${styles.squareButton}`}>
            Sign Up / Log In
          </Link>
          <Link to="/cart" className={`${styles.cartButton} ${styles.squareButton}`}>
            <img src="/img/cart.png" alt="Shopping Cart" className={styles.cartIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;