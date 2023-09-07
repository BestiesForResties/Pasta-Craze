var express = require('express');
var router = express.Router();
const { Cart, User, Item } = require('../db/index');

router.get('/:id', async function(req,res,next) {
    try {
      const userId = req.params.id;
      const cart = await Cart.findByPk(userId);
      res.status(200).send(cart);
    } catch (error) {
      next(error);
    }
})

module.exports = router;