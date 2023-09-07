var express = require('express');
var router = express.Router();
const { Cart } = require('../db/index');

//Mock cart requests

router.get('/:id', async function(req,res,next) {
    const id = req.params.id;
    const cart = await Cart.findAll();
    res.send(cart);
})

router.post('/:id/add-to-cart/:itemId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    const itemId = req.params.itemId;

    const item = await Item.findByPk(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Find or create the user's cart
    const cart = await Cart.findOrCreate({
      where: { UserId: user.id },
    });

    res.status(200).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;