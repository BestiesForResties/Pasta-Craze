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

router.get('/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const user = await User.findOne({where:{id:id}});
    console.log(user);
    res.send(user);
  } catch (error) {
    // Handle any errors that may occur during the database query or response handling.
    next(error);
  }
});

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

router.get('/:id/cart', async function(req,res,next) {
    const id = req.params.id;
    const cart = await Cart.findOne({where: {id}})
    res.send(cart);
})

module.exports = router;
