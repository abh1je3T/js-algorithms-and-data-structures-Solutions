class TrieNode {
    constructor() {
      this.characters = {};
      this.isWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    addWord(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.characters[char]) {
          node.characters[char] = new TrieNode();
        }
        node = node.characters[char];
      }
      node.isWord = true;
    }
  
    findWord(word) {
      let node = this.root;
      
      for (let char of word) {
        // If character is not found, return undefined
        if (!node.characters[char]) {
          return undefined;
        }
        node = node.characters[char];
      }
  
      // Return the node where the last character of the word is found
      return node;
    }
  }