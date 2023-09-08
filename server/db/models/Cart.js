const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Cart = sequelize.define('cart', {
  cartStatus: { type: DataTypes.ENUM, 
    values: ['Open', 'CheckedOut'],
    allowNull: false,
    defaultValue: 'Open',
  }
});

module.exports = {
    Cart
};