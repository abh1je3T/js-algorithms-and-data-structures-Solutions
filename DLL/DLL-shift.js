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
     shift() {
        if (this.length === 0) return undefined; // If the list is empty, return undefined

        const shiftedNode = this.head; // Get the current head
        if (this.length === 1) { // If there's only one node
            this.head = null;  // Set head to null
            this.tail = null;  // Set tail to null
        } else { // If there are multiple nodes
            this.head = shiftedNode.next; // Move head pointer forward
            this.head.prev = null; // Remove reference from new head
        }

        this.length--; // Decrement the length
        return shiftedNode; // Return the shifted node
    }
}
