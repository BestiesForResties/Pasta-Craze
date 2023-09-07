const { sequelize } = require('./db');

const { User } = require('./models/User');
const { Item } = require('./models/Item');
const { Cart } = require('./models/Cart');

User.hasOne(Cart);  // A user can have one cart
Cart.belongsTo(User);  // A cart belongs to a user

Item.belongsToMany(Cart, { through: 'CartItem' });  // An item can belong to multiple carts through CartItem

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
    Item,
    Cart,
    sequelize,
};