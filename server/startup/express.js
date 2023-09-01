// startup/express.js
const express = require('express');
const bodyParser = require('body-parser');
const logsRouter = require('../routes/logs');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/logs', logsRouter);

module.exports = app;
