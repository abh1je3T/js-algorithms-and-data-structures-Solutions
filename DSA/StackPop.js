class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;     
        this.size = 0;
    }
    push(val){
        var node = new Node(val);

        if (!this.first){
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first=node;
            this.first.next=tmp;
        }

        return ++this.size;
    }
     pop() {
    if (!this.first) return null; // If the stack is empty, return null

    let removedNode = this.first; // Store the current first node
    this.first = this.first.next; // Update the first to be the next node

    this.size--; // Decrease the size

    if (this.size === 0) {
      this.last = null; // If the stack is empty after popping, set last to null
    }

    return removedNode.value; // Return the value of the removed node
  }
}
