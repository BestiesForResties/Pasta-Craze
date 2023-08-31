const { DataTypes } = require('sequelize');
const sequelize = require('..');

const Cart = sequelize.define('cart', {
  uniqueCartId: DataTypes.STRING,
  cartStatus: { type: DataTypes.ENUM, values: ['Open', 'CheckedOut']}
});

module.exports = {
    Cart
};