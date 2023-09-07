const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../db');

const Item = sequelize.define('item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
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