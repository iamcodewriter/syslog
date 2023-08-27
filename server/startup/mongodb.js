// startup/mongodb.js
const mongoose = require('mongoose');
const config = require('../config/db');

mongoose.connect(config.uri, { useNewUrlParser: true, useUnifiedTopology: true });

