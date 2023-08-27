// app.js
const expressApp = require('./startup/express');
require('./startup/mongodb');
require('./startup/syslog');

const PORT = process.env.PORT || 3000;
expressApp.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});