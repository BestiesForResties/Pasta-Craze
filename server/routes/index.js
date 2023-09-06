var express = require('express');
var router = express.Router();
const { Cart } = require('../db/index');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const carts = await Cart.findAll();
  res.send(carts);
});

module.exports = router;
