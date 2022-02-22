const axios = require('axios');
require('dotenv').config()

async function getExchangeRates(base) {
    if (process.env.FREE_CURRENCY_API_KEY){
      try {
        const response = await axios.get('https://freecurrencyapi.net/api/v2/latest', {
          params: {
            apikey: process.env.FREE_CURRENCY_API_KEY,
            base_currency: base
          }
        });
        return response.data.data;
      } catch (error) {
        console.error(error);
      }
    } else{
      console.log("provide FREE_CURRENCY_API_KEY ");
    }
    
  }

  module.exports = getExchangeRates;