class Stack {
    constructor() {
      this.queue1 = new Queue(); // Queue for storing elements
      this.queue2 = new Queue(); // Temporary queue for popping operations
    }
  
    push(val) {
      // Add the element to queue1 (constant time - O(1))
      this.queue1.enqueue(val);
      return this; // Return the stack object for chaining
    }
  
    pop() {
      // If queue1 is empty, stack is empty, return null (constant time - O(1))
      if (this.queue1.size === 0) {
        return null;
      }
  
      // Move all elements from queue1 to queue2 except the last one (amortized constant time - O(1))
      // Amortized because the total time for multiple pops is O(n) but each pop itself is O(1) on average
      while (this.queue1.size > 1) {
        this.queue2.enqueue(this.queue1.dequeue());
      }
  
      // Dequeue and return the last element from queue1 (constant time - O(1))
      const popped = this.queue1.dequeue();
  
      // Swap the roles of queue1 and queue2 for future operations (constant time - O(1))
      const tempQueue = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = tempQueue;
  
      return popped;
    }
  }
  // QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU
  
  class Node {
      constructor(value) {
          this.value = value;
          this.next = null;
      }
  }
  
  class Queue {
      constructor() {
          this.first = null;
          this.last = null;
          this.size = 0;
      }
      enqueue(data) {
          var node = new Node(data);
  
          if (!this.first) {
              this.first = node;
              this.last = node;
          } else {
              this.last.next = node;
              this.last = node;
          }
  
          return ++this.size;
      }
  
      dequeue() {
          if (!this.first) return null;
  
          var temp = this.first;
          if (this.first == this.last) {
              this.last = null;
          }
          this.first = this.first.next;
          this.size--;
          return temp.value;
      }
  }
  