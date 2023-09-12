import React, { useState } from 'react';

const Menu = () => {
  // Define your seed data
  const seedData = [
    {
      id: 1,
      name: 'Chicken Carbonara',
      description: 'Creamy chicken carbonara is inspired by a classic Italian (Roman) pasta dish made with bacon or pancetta, whisked egg, and hard cheese.',
      price: 12.99,
      category: 'Pasta',
      
    },
    {
      id: 2,
      name: 'Fettuccine Alfredo',
      description: 'Creamy Alfredo sauce Fettuccine pasta with a homemade decadent Alfredo sauce made with 5 simple ingredients parmesan cheese and butter.',
      price: 11.99,
      category: 'Pasta',
    
    },
    {
      id: 3,
      name: 'Baked Ziti',
      description: 'A casserole with ziti pasta and a Neapolitan-style tomato sauce.',
      price: 10.99,
      category: 'Pasta',
     
    },
    {
      id: 4,
      name: 'Lasagna',
      description: 'Made of very wide, flat sheets. Either term can also refer to an Italian dish made of stacked layers of lasagna alternating with fillings such as ragù, béchamel sauce, vegetables, cheeses, and seasonings and spices.',
      category: 'Pasta',
      price: 9.99,
      
    },
  ];

  // State to manage cart items
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-items">
        {seedData.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image_url} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
