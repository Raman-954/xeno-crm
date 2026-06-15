const mongoose = require('mongoose');
module.exports = mongoose.model('Campaign', new mongoose.Schema({
  name: String, channel: String, status: { type: String, default: 'Sent' },
  stats: { sent: Number, delivered: Number, opened: Number, converted: Number }
}));