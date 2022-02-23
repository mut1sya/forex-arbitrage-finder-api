import { getArbitragePath } from './arbitrage.service';
import  * as currencies from './data/currencies.json'

export async function getPaths(req, res){
    // check if input is in our currency data
    const currency = req.params.baseCurrency
    if ( !currencies.default.includes(currency)){
        res.send("currency not available");
    } else {
        res.send(await getArbitragePath(currency));
    }
    
}

