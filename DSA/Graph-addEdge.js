class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        // Check if both vertices exist in the graph
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // Add each vertex to the other's adjacency list
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
}
