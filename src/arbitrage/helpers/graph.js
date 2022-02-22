const Edge = require('./edge');

class Graph {    
    constructor() {
        this.vertices = new Set();
        this.edges = [];
    }

    addEdge(source, destination, exchange_rate) {
        this.addVertex(source);
        this.addVertex(destination);
        this.edges.push(new Edge(source, destination, exchange_rate));
    }
    addVertex(vertex) {
        this.vertices.add(vertex);
    }

    getTotalPathRate(data, path){
        let result = 1;
        for (let i =0; i< path.length-1; i++) {
            result *= data[path[i]][path[i+1]]
        }
        return result;
    
    }
    
    getPathRates(data, path) {
        const final = [];
        let result = 1;
        for (let i =0; i< path.length-1; i++){
            result *= data[path[i]][path[i+1]];
            final.push({
                source: path[i],
                destination: path[i+1],
                rate: data[path[i]][path[i+1]],
                total: result
            });
        }
        return final;
    }

    getMaxNegativeCycleBellmanFord(data, start_node) {
        let dist = {};
        let parent = {};

        // Step 1: Initialize distances from src to all other vertices as INFINITE
        for(let i of this.vertices){
            dist[i] = Number.MAX_VALUE;
            parent[i] = -1;
        }

        // Set  start_node to 0
        dist[start_node] = 0;

        // Step 2: Relax all edges |V| - 1 times.
        // A simple shortest path from src to any other vertex can have at-most |V| - 1 edges
        for(let i = 0; i < this.vertices.size; i++) {
            for (let j in this.edges){
                let u = this.edges[j].src;
                let v = this.edges[j].dest;
                let weight = this.edges[j].weight;
                if (dist[u] != Number.MAX_VALUE && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    parent[v] = u;
                }
            }
        }

        // Step 3: check for negative-weight cycles.
        // The above step guarantees shortest distances if graph doesn't contain negative weight cycle. If we get a shorter path, then there is a cycle.
        let maxArbitragePath = [];
        let maxArbitrageRate = 1;
        for(let i = 0; i < this.vertices.size; i++) {
            for (let j in this.edges){
                let srcNode = this.edges[j].src;
                let destNode = this.edges[j].dest;
                let weight = this.edges[j].weight;
                if (dist[srcNode] != Number.MAX_VALUE && dist[srcNode] + weight < dist[destNode]) {
                    dist[destNode] = dist[srcNode] + weight;
                    parent[destNode] = srcNode;
                    if (destNode === start_node) {
                        const path = [];
                        let current = destNode;
                        while (current.length && !path.includes(current)){
                            path.unshift(current);
                            current = parent[current];
                        }
                        path.unshift(destNode);
                        let pathCost = this.getTotalPathRate(data, path);
                        if (pathCost > maxArbitrageRate){
                            maxArbitragePath = path;
                            maxArbitrageRate = pathCost;
                        }
                        
                    }
                }
            }
        }
        if (maxArbitragePath){
            return this.getPathRates(data, maxArbitragePath);
        } else {
            return [];
        }
        
        
    }
}

module.exports = Graph;