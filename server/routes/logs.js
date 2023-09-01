// routes/logs.js
const express = require('express');
const router = express.Router();
const Log = require('../models/log');
const authenticate = require('../middleware/authenticate');

// GET latest logs with a limit
router.get('/', authenticate, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100; // Get limit from query parameter, default to 100
    const logs = await Log.find().sort({ timestamp: -1 }).limit(limit).exec();
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error retrieving logs:', error);
    res.status(500).send('Internal Server Error');
  }
});

// ... (other routes)

module.exports = router;
