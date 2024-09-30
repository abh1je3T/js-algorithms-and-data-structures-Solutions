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
    push(value) {
    // Create a new node with the value
    let newNode = new Node(value);

    if (!this.first) {
      // If the stack is empty, set the first and last to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, set the new node's next to the current first node
      newNode.next = this.first;
      // Update the first to be the new node
      this.first = newNode;
    }

    // Increment the size of the stack
    this.size++;
    // Return the new size of the stack
    return this.size;
  }
}
