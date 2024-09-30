class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){
        var newNode = new Node(val);
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
    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }
        
        cur = this.head;
        var count = 0;
        for (var cur = this.head; cur !== null && count != index; cur = cur.next) {
            count++;
        }
        
        return cur;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) {
            var removedNode = this.head;
            this.head = this.head.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return removedNode;
        }

        var previousNode = this.get(index - 1);
        var removedNode = previousNode.next;
        previousNode.next = removedNode.next;

        if (index === this.length - 1) {
            this.tail = previousNode;
        }

        this.length--;
        return removedNode;
    }
}
