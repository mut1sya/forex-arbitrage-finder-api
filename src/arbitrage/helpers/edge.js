class Edge {
    constructor(src, dest, exchange_rate) {
        this.src = src;
        this.dest = dest;
        this.exchange_rate = exchange_rate;
        this.weight = -(Math.log(this.exchange_rate));
    }
}
module.exports = Edge;