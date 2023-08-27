// startup/syslog.js
const dgram = require('dgram');
const loggerMiddleware = require('../middleware/logger');
const syslogServer = dgram.createSocket('udp4');

syslogServer.on('message', (message, remote) => {
  const msg = message.toString('utf-8').trim();
  loggerMiddleware(msg); // Log to console

  // Rest of syslog message processing logic here
});

syslogServer.on('listening', () => {
  const address = syslogServer.address();
  console.log(`Syslog server is listening on ${address.address}:${address.port}`);
});

syslogServer.bind(514, '0.0.0.0');