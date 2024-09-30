class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
     rotate(positions) {
        if (this.length === 0 || positions % this.length === 0) return this;
        
        // Normalize positions: handle negatives and larger-than-length rotations
        positions = positions % this.length;
        if (positions < 0) {
            positions = this.length + positions;
        }

        let count = 1;
        let current = this.head;

        while (count < positions) {
            current = current.next;
            count++;
        }

        // Current is now the node before the new head
        let newHead = current.next;
        current.next = null;
        this.tail.next = this.head;
        this.tail = current;
        this.head = newHead;

        return this;
    }
}
