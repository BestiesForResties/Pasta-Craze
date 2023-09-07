const express = require('express');
const router = express.Router();
const { User,
  Item,
  Cart,
  CartItem,
  sequelize } = require('../db/index');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await User.findAll();
    console.log(users);
    res.send(users);
  } catch (error) {
    // Handle any errors that may occur during the database query or response handling.
    next(error);
  }
});

//Get specific user
router.get('/:id', async function(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    res.send(user);
  } catch (error) {
    // Handle any errors that may occur during the database query or response handling.
    next(error);
  }
});

//Post new user
router.post('/', async function(req, res, next) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please provide username, email, and password' });
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    await Cart.create({ UserId: newUser.id });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// delete user
router.delete('/:id', async function(req, res, next) {
  const userId = parseInt(req.params.id);

  try {
    // Find the item by ID in the database
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the item from the database
    await user.destroy();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
