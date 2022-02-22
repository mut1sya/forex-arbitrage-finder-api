const express = require('express');
const arbitrage = require('./arbitrage/arbitrage.route');

const router = express.Router();

router.use('/arbitrage', arbitrage);

module.exports = router;