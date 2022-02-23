import express from 'express';
import { getPaths } from './arbitrage.controller';

export const arbitrageRouter = express.Router({ mergeParams: true });
arbitrageRouter.route('/:baseCurrency').get(getPaths);

