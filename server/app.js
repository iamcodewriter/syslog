// app.js
const expressApp = require('./startup/express');
const logger = require('./middleware/logger');
require('./startup/mongodb');
require('./startup/syslog');

const PORT = process.env.PORT || 3000;
expressApp.listen(PORT, () => {
  logger(`Express server is running on port ${PORT}`);
});