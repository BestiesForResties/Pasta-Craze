var express = require('express');
var router = express.Router();
const { Item } = require('../db/index');

//get all items
router.get('/', async function(req, res, next) {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

//create item
router.post('/', async function(req, res, next) {
  try {
    const { name, type, description, price } = req.body;

    if (!name || !type || !description || !price) {
      return res.status(400).json({ error: 'Please provide username, email, and password' });
    }

    const item = await Item.create({
      name,
      type,
      description,
      price,
    })

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
});

//update item
router.put('/:id', async (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  try {
    // Find the item by ID in the database
    const item = await Item.findByPk(itemId);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Update the item's properties with the provided data
    if (name !== undefined) {
      item.name = name;
    }
    if (type !== undefined) {
      item.type = type;
    }
    if (description !== undefined) {
      item.description = description;
    }
    if (price !== undefined) {
      item.price = price;
    }

    await item.save();

    res.json({ message: 'Item updated successfully', item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//delete item
router.delete('/:id', async function(req, res, next) {
  const itemId = parseInt(req.params.id);

  try {
    // Find the item by ID in the database
    const item = await Item.findByPk(itemId);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Delete the item from the database
    await item.destroy();

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
