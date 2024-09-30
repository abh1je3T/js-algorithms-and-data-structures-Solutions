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
  
    getWords() {
      const words = [];
      
      // Helper function for depth-first traversal
      const traverse = (node, word) => {
        if (node.isWord) {
          words.push(word);
        }
        
        for (let char in node.characters) {
          traverse(node.characters[char], word + char);
        }
      };
  
      // Start the traversal from the root node
      traverse(this.root, "");
      return words;
    }
  }