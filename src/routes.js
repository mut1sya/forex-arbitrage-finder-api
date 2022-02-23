import express from 'express';
import { arbitrageRouter } from './arbitrage/arbitrage.route';
import * as currencies from './arbitrage/data/currencies.json'
export const appRouter = express.Router();
appRouter.use('/arbitrage', arbitrageRouter);
appRouter.use('/currencies', (req, res) => {
    res.send(currencies.default);
});
