// startup/express.js
const express = require('express');
const bodyParser = require('body-parser');
const logsRouter = require('../routes/logs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/logs', logsRouter);

module.exports = app;
