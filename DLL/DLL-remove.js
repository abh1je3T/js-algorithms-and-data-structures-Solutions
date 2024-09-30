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
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
       get(index) {
        // If the index is out of bounds, return null
        if (index < 0 || index >= this.length) {
            return null;
        }

        let currentNode;

        // Choose to start from the head or tail for efficiency
        if (index <= this.length / 2) {
            currentNode = this.head; // Start from the head
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next; // Traverse to the desired index
            }
        } else {
            currentNode = this.tail; // Start from the tail
            for (let i = this.length - 1; i > index; i--) {
                currentNode = currentNode.prev; // Traverse to the desired index
            }
        }

        return currentNode; // Return the found node
    }

    // Method to remove a node at a specific index
    remove(index) {
        // Check if index is out of bounds
        if (index < 0 || index >= this.length) {
            return undefined; // Invalid index
        }

        const nodeToRemove = this.get(index); // Get the node to remove

        // If we're removing the head
        if (nodeToRemove === this.head) {
            this.head = nodeToRemove.next; // Update head to the next node
            if (this.head) {
                this.head.prev = null; // Set prev of the new head to null
            }
        } else if (nodeToRemove === this.tail) { // If we're removing the tail
            this.tail = nodeToRemove.prev; // Update tail to the previous node
            if (this.tail) {
                this.tail.next = null; // Set next of the new tail to null
            }
        } else { // If it's a middle node
            nodeToRemove.prev.next = nodeToRemove.next; // Bypass the node
            nodeToRemove.next.prev = nodeToRemove.prev; // Bypass the node
        }

        this.length--; // Decrement the length
        return nodeToRemove; // Return the removed node
    }
}
