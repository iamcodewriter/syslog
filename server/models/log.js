// models/log.js
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  ip: String,
  level: String,
  message: String
}, { collection: 'log' });

module.exports = mongoose.model('Log', logSchema);
