// startup/syslog.js
const wlog=require('../middleware/logger')
const dgram = require('dgram');
const logger = require('./mongodb');
const syslogServer = dgram.createSocket('udp4');

syslogServer.on('message', (message, remote) => {
  const msg = message.toString('utf-8').trim();
  const ipAddress = remote.address;
  const logLevelMatch = msg.match(/\[(\w+)\]/);
  const logLevel = logLevelMatch ? logLevelMatch[1] : 'UNKNOWN';
  const logMessage = `[${ipAddress}] ${msg}`;

  wlog(ipAddress+":"+logLevel+":"+logMessage); // Log to console
  logger.info({
    timestamp: new Date(),
    ip: ipAddress,
    level: logLevel,
    message: msg
  }); // Log to MongoDB using Winston
});

syslogServer.on('listening', () => {
  const address = syslogServer.address();
  wlog(`Syslog server is listening on ${address.address}:${address.port}`);
});

syslogServer.bind(514, '0.0.0.0');
