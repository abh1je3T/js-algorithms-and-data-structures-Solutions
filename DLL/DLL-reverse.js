class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
     // Method to reverse the linked list
    reverse() {
        let current = this.head; // Start with the head of the list
        let temp = null; // Temporary variable to hold node's next

        // Swap prev and next for each node in the list
        while (current) {
            temp = current.prev; // Store the previous node
            current.prev = current.next; // Reverse the direction
            current.next = temp; // Move to the next node
            current = current.prev; // Move to the next node in the original list
        }

        // Update head and tail references
        if (temp) {
            this.tail = this.head; // Set tail to the old head
            this.head = temp.prev; // Set head to the last node processed
        }

        return this; // Return the reversed list
    }
}