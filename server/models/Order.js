const mongoose = require('mongoose');
module.exports = mongoose.model('Order', new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  amount: Number
}, { timestamps: true }));