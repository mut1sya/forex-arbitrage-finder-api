
import express from 'express';
import cors from 'cors';
import nodeCron from 'node-cron';
import { appRouter } from './routes';
import { createExchangeRateData } from './arbitrage/helpers/createExchangeRateData';

require('dotenv').config();

//setup app & its routes
const app = express();
app.use(cors());
app.use(appRouter);


// set up cron job to update currency data after every 10 minutes
nodeCron.schedule("* * * 10 * *", () => {
    createExchangeRateData();
});

//start http server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});


