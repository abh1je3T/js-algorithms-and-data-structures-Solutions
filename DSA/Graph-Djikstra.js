// WeightedGraph constructor that inherits from Graph
function WeightedGraph() {
    Graph.call(this); // Call the Graph constructor
  }
  
  // Inherit methods from Graph
  WeightedGraph.prototype = Object.create(Graph.prototype);
  WeightedGraph.prototype.constructor = WeightedGraph;
  
  // Override addEdge method to handle weights
  WeightedGraph.prototype.addEdge = function(vertex1, vertex2, weight) {
    // Instead of just storing the vertex, store an object with vertex and weight
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  };
  
  // Dijkstra's algorithm for finding the shortest path
  WeightedGraph.prototype.Dijkstra = function(start, finish) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};
    const path = [];  // Array to store the final shortest path
    let smallest;
  
    // Initialize distances, previous, and priority queue
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
  
    // Process the priority queue
    while (priorityQueue.values.length) {
      smallest = priorityQueue.dequeue().val;
  
      // If we reached the destination, reconstruct the path
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        path.push(start);
        return path.reverse();  // Return the shortest path in the correct order
      }
  
      // If the smallest node is not the destination
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let candidate = distances[smallest] + neighbor.weight;
          let nextNeighbor = neighbor.node;
  
          if (candidate < distances[nextNeighbor]) {
            // Update new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // Update the previous node for shortest path reconstruction
            previous[nextNeighbor] = smallest;
            // Enqueue the neighbor with the updated priority (distance)
            priorityQueue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
  
    return [];  // Return an empty array if no path is found
  };
  
  
  function Graph() {
    this.adjacencyList = {};
  }
  
  Graph.prototype.numEdges = function() {
    let total = 0;
  
    Object.values(this.adjacencyList).forEach(list => {
      total += list.length;
    });
  
    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
  };
  
  Graph.prototype.addVertex = function(vertex) {
    this.adjacencyList[vertex] = [];
  };
  
  Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  };
  
  Graph.prototype.removeVertex = function(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  };
  
  Graph.prototype.removeEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  };
  
  /*** 
     *** Use the following as a PriorityQueue (it's a min heap)! 
     ***
  ***/
  class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority });
      this.sort();
    }
    dequeue() {
      return this.values.shift();
    }
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }