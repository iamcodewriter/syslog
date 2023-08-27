// routes/logs.js
const express = require('express');
const router = express.Router();
const Log = require('../models/log');

router.get('/', async (req, res) => {
  try {
    const logs = await Log.find({}, '-_id timestamp ip level message').exec();
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error retrieving logs:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;