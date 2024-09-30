class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }

    findWord(word, index = 0) {
        // This function will return the node in the trie
        // which corresponds to the end of the passed in word.

        // Be sure to consider what happens if the word is not in this Trie.

        var char = word[index];
        if (index < word.length - 1 && this.characters[char]) {
            index += 1;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }
    getWords(words = [], currentWord = "") {
        // This function will return all the words which are
        // contained in this Trie.
        // it will use currentWord as a prefix,
        // since a Trie doesn't know about its parents.

        if (this.isWord) {
            words.push(currentWord);
        }
        for (var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
    autoComplete(prefix) {
        // This function will return all completions
        // for a given prefix.
        // It should use findWord and getWords.
        var subTrie = this.findWord(prefix);
        if (subTrie) {
            return subTrie.getWords([], prefix);
        } else {
            return [];
        }
    }
   removeWord(word, index = 0) {
    // Base case: If we have reached the end of the word
    if (index === word.length) {
        // If the word is not marked as a word, it doesn't exist
        if (!this.isWord) {
            return false; // Word not found
        }
        // Mark the word as not existing
        this.isWord = false;

        // Return true if this node has no children (can be deleted)
        return Object.keys(this.characters).length === 0;
    }

    const char = word[index];
    const subTrie = this.characters[char];

    // If the character does not exist, the word is not present
    if (!subTrie) {
        return false; // Word not found
    }

    // Recursively call removeWord on the subTrie
    const shouldDeleteCurrentNode = subTrie.removeWord(word, index + 1);

    // If the current node should be deleted
    if (shouldDeleteCurrentNode) {
        delete this.characters[char]; // Remove the character from the current node

        // Return true if this node should also be deleted (it is not a word and has no children)
        return Object.keys(this.characters).length === 0 && !this.isWord;
    }

    return false; // The word is still present, so we don't delete the current character
}
}
