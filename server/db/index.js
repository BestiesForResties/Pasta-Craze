const { User } = require('./models/User');
const { Item } = require('./models/Item');
const { Cart } = require('./models/Cart');
const { CartItem } = require('./models/CartItem');

User.hasOne(Cart);  // A user can have one cart
Cart.belongsTo(User);  // A cart belongs to a user

Cart.belongsToMany(Item, { through: CartItem });  // A cart can have many items through CartItem
Item.belongsToMany(Cart, { through: CartItem });  // An item can belong to multiple carts through CartItem

CartItem.belongsTo(Cart);  // A cart item belongs to a cart
CartItem.belongsTo(Item);  // A cart item belongs to an item

module.exports = {
    User,
    Item,
    Cart,
    CartItem,
};