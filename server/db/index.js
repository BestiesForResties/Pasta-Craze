const { sequelize } = require('./db');

const { User, Cart } = require('./models/User');
const { Item } = require('./models/Item');

User.hasOne(Cart);  // A user can have one cart
Cart.belongsTo(User);  // A cart belongs to a user

Item.belongsToMany(Cart, { through: 'CartItem' });  // An item can belong to multiple carts through CartItem

module.exports = {
    User,
    Item,
    Cart,
    sequelize,
};