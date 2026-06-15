const mongoose = require('mongoose');
module.exports = mongoose.model('Product', new mongoose.Schema({
  name: String,
  category: { type: String, enum: ['Hover Devices', 'Smart Wearables', 'xeno Shoes', 'Gadgets'] },
  price: Number,
  stock: Number
}));