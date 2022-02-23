
import { Graph } from './helpers/graph';
import * as exchangeRateData from './data/exchangeRateData.json';


export async function getArbitragePath(baseCurrency){
    let graph = new Graph();
    for (const key_src in exchangeRateData){
        for (const key_dest in exchangeRateData[key_src]){
            graph.addEdge(key_src, key_dest, exchangeRateData[key_src][key_dest]);
        }
    }
    const result = graph.getMaxNegativeCycleBellmanFord(exchangeRateData, baseCurrency);
    return result;
}