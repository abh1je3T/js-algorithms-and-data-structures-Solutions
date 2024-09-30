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
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = new Node(value);
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
    remove(value) {
      const removeHelper = (node, value) => {
        if (!node) {
          return null;
        }
  
        if (value < node.value) {
          node.left = removeHelper(node.left, value);
        } else if (value > node.value) {
          node.right = removeHelper(node.right, value);
        } else   
   {
          // Node to be removed found
          if (!node.left && !node.right) {
            // Node is a leaf node
            return null;
          } else if (!node.left) {
            // Node has only a right child
            return node.right;
          } else if (!node.right) {
            // Node has only a left child
            return node.left;
          } else {
            // Node has two children
            let successor = node.right;
            while (successor.left) {
              successor = successor.left;
            }
            node.value = successor.value;
            node.right = removeHelper(node.right, successor.value);
          }
        }
  
        return node;
      };
  
      this.root = removeHelper(this.root, value);
      return this;
    }
  }
  