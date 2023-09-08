import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.callButton}>ORDER NOW!</div>
      <ul className={styles.list}>
        <li className={styles.listItem}>Homepage</li>
        <li className={styles.listItem}>Menu</li>
        <li><img src="/public/logo.jpg" alt="" className={styles.logo} /></li>
        <li className={styles.listItem}>Contact</li>
      </ul>
      <div className={styles.cart}>
        <img src="/public/cart.jpeg" alt="" className={styles.cartImage} />
        <div>{/* Counter logic here */}</div>
      </div>
    </div>
  );
};

export default Navbar;