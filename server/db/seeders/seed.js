const { User, Item, sequelize } = require('../index');

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
    {
      id: 1,
      name: 'Chicken Carbonara',
      description:'creamy chicken carbonara is inspired by a classic Italian (Roman) pasta dish made with bacon or pancetta, whisked egg, and hard cheese.',
      price: 12.99,
      category: 'Pasta',
      image_url: 'https://hips.hearstapps.com/hmg-prod/images/hdm-chickencorbonara-14753-1564436398.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*,'
    },
    {
      id: 2,
      name: 'Fettuccine Alfredo',
      description: 'Creamy Alfredo sauce Fettuccine pasta with a homemade decadent Alfredo sauce made with 5 simple ingredients parmesan cheese and butter.',
      price: 11.99,
      category: 'Pasta',
      image_url: 'https://amindfullmom.com/wp-content/uploads/2016/01/Light-Fettucine-Alfredo-Recipe.jpg',
    },
    {
      id: 3,
      name: 'Bake Ziti',
      description: 'A casserole with ziti pasta and a Neapolitan-style tomato sauce.',
      price: 10.99,
      category: 'Pasta',
      image_url: 'https://www.thecountrycook.net/wp-content/uploads/2020/02/EASY-BAKED-ZITI-thumbnail.jpg',
    },
    {
      id: 4,
      name: 'Lasagna',
      description: 'Made of very wide, flat sheets. Either term can also refer to an Italian dish made of stacked layers of lasagna alternating with fillings such as ragù, béchamel sauce, vegetables, cheeses, and seasonings and spices..',
      category: 'Pasta',
      price: 9.99,
      image_url: 'https://houseofnasheats.com/wp-content/uploads/2020/09/classic-lasagna-recipe-22.jpg',

    },     
  ]);
  })
  .catch((error) => {
    console.error('Error syncing models:', error);
  });
};

seed();