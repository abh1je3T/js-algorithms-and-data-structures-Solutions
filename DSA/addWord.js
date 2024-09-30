class Trie {
    constructor() {
      this.characters = {};
      this.isWord = false;
    }
  
    addWord(word, index = 0) {
      const currentChar = word[index];
  
      if (!currentChar) {
        // Reached the end of the word
        this.isWord = true;
        return;
      }
  
      // If the current character doesn't exist, create a new Trie node
      if (!this.characters[currentChar]) {
        this.characters[currentChar] = new Trie();
      }
  
      // Recursively add the rest of the word
      this.characters[currentChar].addWord(word, index + 1);
    }
  }