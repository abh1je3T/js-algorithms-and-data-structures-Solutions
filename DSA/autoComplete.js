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
  
    autoComplete(prefix) {
      const words = [];
      let node = this.root;
  
      // Traverse to the last character of the prefix
      for (let char of prefix) {
        if (!node.characters[char]) {
          return []; // Return empty if prefix not found
        }
        node = node.characters[char];
      }
  
      // Helper function for depth-first traversal to gather words
      const gatherWords = (currentNode, currentWord) => {
        if (currentNode.isWord) {
          words.push(currentWord);
        }
        
        for (let char in currentNode.characters) {
          gatherWords(currentNode.characters[char], currentWord + char);
        }
      };
  
      // Start gathering words from the found node
      gatherWords(node, prefix);
      return words;
    }
  }
  