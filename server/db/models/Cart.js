const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Cart = sequelize.define('cart', {
  uniqueCartId: DataTypes.STRING,
  cartStatus: { type: DataTypes.ENUM, 
    values: ['Open', 'CheckedOut']}
});

module.exports = {
    Cart
};