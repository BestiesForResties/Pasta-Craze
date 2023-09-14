import React from 'react';
import ChickenCarbonaraImage from './ChickenCarbonaraImage.jpg';
import FettuccineAlfredoImage from './FettuccineAlfredoImage.jpg';
import BakedZitiImage from './BakedZitiImage.jpeg';
import LasagnaImage from './LasagnaImage.jpg';
import styles from './Menu.module.css';

const Menu = ({ cart, setCart }) => {

  const cartItems = cart || [];

  const seedData = [
    {
      id: 1,
      name: 'Chicken Carbonara',
      description: 'Creamy chicken carbonara is inspired by a classic Italian (Roman) pasta dish made with bacon or pancetta, whisked egg, and hard cheese.',
      price: 12.99,
      category: 'Pasta',
      image: ChickenCarbonaraImage,
    },
    {
      id: 2,
      name: 'Fettuccine Alfredo',
      description: 'Creamy Alfredo sauce Fettuccine pasta with a homemade decadent Alfredo sauce made with 5 simple ingredients parmesan cheese and butter.',
      price: 11.99,
      category: 'Pasta',
      image: FettuccineAlfredoImage,
    },
    {
      id: 3,
      name: 'Baked Ziti',
      description: 'A casserole with ziti pasta and a Neapolitan-style tomato sauce.',
      price: 10.99,
      category: 'Pasta',
      image: BakedZitiImage,
    },
    {
      id: 4,
      name: 'Lasagna',
      description: 'Made of very wide, flat sheets. Either term can also refer to an Italian dish made of stacked layers of lasagna alternating with fillings such as ragù, béchamel sauce, vegetables, cheeses, and seasonings and spices.',
      price: 9.99,
      category: 'Pasta',
      image: LasagnaImage,
    },
  ];

  const addToCart = (item) => {
    setCart([...cartItems, item]);
  };

  return (
    <div className={styles.menuContainer} style={{ backgroundColor: '#f2f2f2' }}>
      <h1>Menu</h1>
      <div className={styles.menuItems}>
        {seedData.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <img src={item.image} alt={item.name} className={styles.menuItemImage} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className={styles.quantityDisplay}>
              Qty: 1 
            </div>
            <button className={styles.addToCartButton} onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className={styles.checkoutButton} onClick={() => console.log('Checkout clicked')}>
        Checkout ({cartItems.length} items)
      </button>
    </div>
  );
};

export default Menu;



 