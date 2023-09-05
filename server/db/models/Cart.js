const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Cart = sequelize.define('cart', {
  userId: DataTypes.STRING,
  cartStatus: { type: DataTypes.ENUM, 
    values: ['Open', 'CheckedOut']}
});

module.exports = {
    Cart
};