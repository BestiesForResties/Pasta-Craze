import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
       
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            WHERE PASTA MEETS ADDICTING 
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            8374 PARK AVE 
            <br />Bronx NewYork, 10458
            <br /> (718) 378-2929
          </p>
          {/* Other address entries */}
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 12:00AM – 11:00PM
          </p>
          <p className= {styles.text}>
            
            SATURDAY - SUNDAY 
           <br /> 12:00PM - 1:00AM
            
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
