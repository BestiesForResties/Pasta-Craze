const { DataTypes } = require('sequelize');
const sequelize = require('..');

const CartItem = sequelize.define('cart_item', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });

module.exports = {
    CartItem
};