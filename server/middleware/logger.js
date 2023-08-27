// middleware/logger.js
const winston = require('winston');

// Define Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.log' }) // Optional: Save logs to a file
  ]
});

// Middleware function to log messages
module.exports = function (message) {
  logger.info({
    timestamp: new Date(),
    message: message
  });
};
