const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let shoppingListSchema = new Schema({
  name: {
    type: String,
    required: [true, 'item name is requied!']
  },

  price: {
    type: String,
    required: [true, 'item price is requied!']
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);