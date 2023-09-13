import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Make sure to import your styles
import backgroundImage from './background.webp'; // Adjust the path to your background image

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles['background-image']} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.header}>
          <div className={styles.topHeader}>
            <h1 className={styles.largeHeader}>Pasta Craze</h1>
            <Link to="/menu">
              <button className={styles.orderButton}>Order Now</button>
            </Link>
          </div>
          <h2 className={styles.smallHeader}>Where Pasta Meets Addicting</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;