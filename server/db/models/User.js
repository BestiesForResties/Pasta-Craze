const { DataTypes } = require('sequelize');
const {sequelize} = require('../db');
const { Cart } = require('./Cart');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_Admin: {
    type: DataTypes.ENUM,
    values: [1, 0],
    defaultValue: 0,
  },
}, {
  hooks: {
    afterCreate: async function(user) {
      const newCart = await Cart.create({ userId: user.id });
      user.addCart
    }
  }
});

User.afterCreate(async (user) => {
  try {
    const newCart = await Cart.create({ userId: user.id });
    console.log(`Cart created for user: ${user.username}`);
  } catch (error) {
    console.error(`Error creating cart for user ${user.username}:`, error);
  }
});

module.exports = {
    User,
    Cart
};
