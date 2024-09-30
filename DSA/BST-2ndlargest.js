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
    insert(value){
           // only accept numbers....watch out since NaN is typeof number!
      if (typeof value === 'number' && !isNaN(value)) {
          // if there is nothing in the tree, start it off with a new node!
          if (this.root === null ) {
              this.root = new Node(value);
              return this;
          } 
          else {
              // current variable used for traversal, just like linked lists!
              var current = this.root;
              // keep looping till we get to the correct spot;
              while (true) {
                  if (value < current.value) {
                      // if there is nothing on the left
                      if (current.left === null ) {
                          // make a new node and get out
                          current.left = new Node(value);
                          return this;
                      }
                      // otherwise, keep moving on!
                       
                      else {
                          current = current.left;
                      }
                  } 
                  else if (value > current.value) {
                      // if there is nothing on the right
                      if (current.right === null ) {
                          // make a new node and get out
                          current.right = new Node(value);
                          return this;
                      } else {
                          current = current.right;
                      }
                  }
                  // otherwise it must be a duplicate so let's get out of here
                   
                  else {
                      return "duplicate!";
                  }
              }
          }
      } 
      else
          return "Please insert a number";
    }
        findSecondLargest() {
    if (!this.root || !this.root.right) {
      return undefined; // Tree has fewer than two nodes
    }
  
    let current = this.root.right;
    while (current.right) {
      current = current.right;
    }
  
    // Check if current.parent is defined before accessing its value
    if (current.parent) {
      return current.parent.value;
    } else {
      // Handle the case where the rightmost node is the root
      return this.root.value;
    }
  }
  }