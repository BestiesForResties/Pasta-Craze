const { User, Item, Cart, sequelize } = require('../index');

const seed = async () => {

sequelize.sync({force:true})
  .then(async () => {
  await User.create(
    { username: 'admin',
      email: 'admin@email.com',
      password: 'test',
      is_Admin: 1
  });

  await User.create(
    { username: 'damian',
      email: 'damian@email.com',
      password: '1234',
      is_Admin: 0
  });

  await User.create(
    { username: 'mia',
      email: 'mia@email.com',
      password: '1234',
      is_Admin: 0
  });

  await Item.bulkCreate([
      {name: 'Penne',
      type: 'noodle',
      description: 'Penne is an extruded type of pasta with cylinder-shaped pieces, their ends cut at an angle. Penne is the plural form of the Italian penna, deriving from Latin penna, and is a cognate of the English word pen.',
      price: 1.50},
      {name: 'Rigatoni',
      type: 'noodle',
      description: 'Rigatoni is a type of pasta originating in Italy. They are larger than penne and ziti, and sometimes slightly curved. They are not as curved as elbow macaroni.',
      price: 1.99},
      {name: 'Marinara',
      type: 'Sauce',
      description: 'A simple sauce blended from tomatoes and aromatic ingredients such as onions and garlic. Additional seasonings and herbs such as basil, oregano, red pepper flakes, and more can be added depending on personal preference.',
      price: 3.15},
      {name: 'Alfredo',
      type: 'Sauce',
      description: 'The sauce consists of heavy cream or half and half that is mixed with butter, grated Parmesan cheese, pepper, and occasionally nutmeg to create a rich Italian meal.',
      price: 3.99},
      {name: 'ground beef',
      type: 'toppings',
      description: 'Lean ground beef to make your pasta hearty and healthy',
      price: 1.75},
      {name: 'ground sausage',
      type: 'toppings',
      description: 'Lean ground sausage to give your pasta great flavor',
      price: 1.99},
  ]);
  })
  .catch((error) => {
    console.error('Error syncing models:', error);
  });
};

seed();