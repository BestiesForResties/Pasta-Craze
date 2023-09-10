import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavBar.js'
import styles from './Navbar.module.css'
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <div>
      <Navbar />
      <header className={styles.header}>
        <h1 className={styles.heading}>Pasta Craze</h1>
        <p className={styles.description}></p>
      </header>
      <main>
        





      
        {/* The rest of your content */}
      </main>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));