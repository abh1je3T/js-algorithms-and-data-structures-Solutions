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
        // Method to set the value of a node at a specific index
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

    // Method to set the value of a node at a specific index
    set(index, value) {
        const node = this.get(index); // Get the node at the specified index
        
        if (node === null) { // If the node does not exist (invalid index)
            return false; // Return false
        }

        node.val = value; // Update the node's value
        return true; // Return true to indicate success
    }
}
