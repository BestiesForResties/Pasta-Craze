const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Item = sequelize.define('item', {
    // Define your fields here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
    },
  });

module.exports = {
    Item
};