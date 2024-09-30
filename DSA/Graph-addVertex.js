class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        // Check if the vertex doesn't already exist
        if (!this.adjacencyList[vertex]) {
            // Add the vertex with an empty array in the adjacency list
            this.adjacencyList[vertex] = [];
        }
    }
}
