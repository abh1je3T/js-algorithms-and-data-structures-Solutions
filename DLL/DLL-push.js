class Node {
    constructor(value) {
        this.val = value;     // The value of the node
        this.prev = null;     // Pointer to the previous node
        this.next = null;     // Pointer to the next node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;     // The first node in the list
        this.tail = null;     // The last node in the list
        this.length = 0;      // The number of nodes in the list
    }

    // Method to add a node to the end of the list
    push(value) {
        const newNode = new Node(value); // Create a new node
        
        if (this.length === 0) { // If the list is empty
            this.head = newNode;  // Set head to new node
            this.tail = newNode;  // Set tail to new node
        } else { // If the list is not empty
            newNode.prev = this.tail; // Set new node's prev to current tail
            this.tail.next = newNode;  // Link the current tail to the new node
            this.tail = newNode;        // Update tail to the new node
        }
        
        this.length++; // Increment the length of the list
        return this;   // Return the list
    }

    // Method to pop a node from the end of the list
    pop() {
        if (this.length === 0) return undefined; // If list is empty, return undefined

        const poppedNode = this.tail; // Get the current tail
        if (this.length === 1) { // If there's only one node
            this.head = null;  // Set head to null
            this.tail = null;  // Set tail to null
        } else { // If there are multiple nodes
            this.tail = poppedNode.prev; // Move tail pointer back
            this.tail.next = null; // Remove reference from new tail
        }

        this.length--; // Decrement the length
        return poppedNode; // Return the popped node
    }
}