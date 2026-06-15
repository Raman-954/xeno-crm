const mongoose = require('mongoose');
module.exports = mongoose.model('Customer', new mongoose.Schema({
  name: String, email: String, phone: String, age: Number,
  location: String, preferredChannel: String,
  totalSpend: { type: Number, default: 0 },
  purchaseCount: { type: Number, default: 0 },
  lastPurchaseDate: Date
}));