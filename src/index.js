const express = require('express');
const http = require('http');
const cors = require('cors');
const cron = require("node-cron");
require('dotenv').config()

const createExchangeRateData = require('./arbitrage/helpers/createExchangeRateData')


//setup app & its routes
const app = express();
app.use(cors());
const routes = require('./routes');
app.use(routes);


// set up cron job to update currency data after every 10 minutes
cron.schedule("* 10 * * * *", () => {
    createExchangeRateData();
});

//start http server
const httpServer = http.createServer(app);
httpServer.listen(process.env.APP_PORT);
console.log(`http server listening at port ${process.env.APP_PORT}`);



module.exports = { app };
