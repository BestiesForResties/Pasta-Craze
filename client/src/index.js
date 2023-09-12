import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import styles from './Navbar.module.css';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu.js';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <header className={styles.header}>
          <h1 className={styles.heading}></h1>
          <p className={styles.description}></p>
        </header>
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));