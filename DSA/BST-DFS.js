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
   DFSPreOrder() {
      const values = [];
      const dfsPreOrderHelper = (node) => {
        if (node) {
          values.push(node.value);
          dfsPreOrderHelper(node.left);
          dfsPreOrderHelper(node.right);
        }
      };
      dfsPreOrderHelper(this.root);
      return values;
    }
  
    DFSInOrder() {
      const values = [];
      const dfsInOrderHelper = (node) => {
        if (node) {
          dfsInOrderHelper(node.left);
          values.push(node.value);
          dfsInOrderHelper(node.right);
        }
      };
      dfsInOrderHelper(this.root);
      return values;
    }
  
    DFSPostOrder() {
      const values = [];
      const dfsPostOrderHelper = (node) => {
        if (node) {
          dfsPostOrderHelper(node.left);
          dfsPostOrderHelper(node.right);
          values.push(node.value);
        }
      };
      dfsPostOrderHelper(this.root);
      return values;
    }
  }
  