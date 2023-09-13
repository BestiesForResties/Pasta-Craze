import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Replace with the correct path to your CSS module

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/menu" className={styles.navLink}>Menu</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
        <div className={styles.logoContainer}>
          <img src="img/logo.png" alt="Pasta Craze Logo" className={styles.logo} />
        </div>
        <div className={styles.actionsContainer}>
         
          <Link to="/signin" className={`${styles.signInLink} ${styles.navLink}`}>
            Sign Up / Log In
          </Link>

          <Link to="/cart" className={styles.cartButton}>
            <img src="/img/cart.png" alt="Shopping Cart" className={styles.cartIcon} />
            <span className={styles.cartText}>Cart (2)</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar; 