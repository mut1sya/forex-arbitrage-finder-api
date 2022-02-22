const fs = require('fs');

const getExchangeRates = require('./getExchangeRates');
const currencies = require('../data/currencies.json');

async function createExchangeRateData(){
    const exchangeRateData = {};
    for(let i in currencies) {
        exchangeRateData[currencies[i]] = await getExchangeRates(currencies[i]);
    }
    fs.writeFile('./src/arbitrage/data/exchangeRateData.json', JSON.stringify(exchangeRateData), function (err) {
        if (err) return console.log(err);
        console.log('exchange rate data has been updated');
    });
}

module.exports = createExchangeRateData;
