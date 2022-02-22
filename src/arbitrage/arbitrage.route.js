const express = require('express');
const router = express.Router({ mergeParams: true });

const arbitrageController = require('./arbitrage.controller');


router.route('/:baseCurrency')
    .get(arbitrageController.get);

module.exports = router;