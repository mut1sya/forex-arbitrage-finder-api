const arbitrageService = require('./arbitrage.service');
const currencies = require('./data/currencies.json');

const get = async function(req, res){
    // check if input is in our currency data
    const currency = req.params.baseCurrency
    if ( !currencies.includes(currency)){
        res.send("currency not available");
    } else {
        res.send(await arbitrageService.get(currency));
    }
    
}

module.exports = { get };
