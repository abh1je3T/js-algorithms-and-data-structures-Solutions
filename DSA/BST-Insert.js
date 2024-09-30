class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else   
   {
        let current = this.root;   
  
        let parent = null;
  
        while (true) {
          if (value < current.value) {
            parent = current;
            current = current.left;
            if (!current) {
              parent.left = newNode;
              break;
            }
          } else if (value > current.value) {
            parent = current;
            current = current.right;
            if (!current) {
              parent.right = newNode;
              break;
            }
          } else {
            // Handle duplicate values (optional)
            break;
          }
        }
      }
  
      return this;
    }
  }
  