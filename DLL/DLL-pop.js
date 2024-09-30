class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
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
