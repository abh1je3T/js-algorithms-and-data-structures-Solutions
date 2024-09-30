class Node{
    constructor(value){
        this.value = value;
        this.next = null;      
    }
}

class Queue {
    constructor() {
        this.first = null; // Points to the front of the queue
        this.last = null;  // Points to the end of the queue
        this.size = 0;     // Tracks the number of elements in the queue
    }

    enqueue(value) {
        // Create a new node with the given value
        const newNode = new Node(value);
        
        if (!this.first) {
            // If the queue is empty, both first and last point to the new node
            this.first = newNode;
            this.last = newNode;
        } else {
            // Otherwise, append the new node to the end of the queue
            this.last.next = newNode;
            this.last = newNode;
        }
        
        // Increment the size of the queue
        this.size++;
        // Return the new size of the queue
        return this.size;
    }
}