// startup/mongodb.js
const mongoose = require('mongoose');
const winston = require('winston');
const winstonMongoDB = require('winston-mongodb');
const config = require('../config/db');

mongoose.connect(config.uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winstonMongoDB.MongoDB({
      db: config.uri,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    })
  ]
});

module.exports = logger;
