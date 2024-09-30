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
     unshift(value) {
        const newNode = new Node(value); // Create a new node

        if (this.length === 0) { // If the list is empty
            this.head = newNode;  // Set head to new node
            this.tail = newNode;  // Set tail to new node
        } else { // If the list is not empty
            newNode.next = this.head; // Set new node's next to current head
            this.head.prev = newNode;  // Set current head's prev to new node
            this.head = newNode;        // Update head to the new node
        }

        this.length++; // Increment the length of the list
        return this;   // Return the list
    }
}
