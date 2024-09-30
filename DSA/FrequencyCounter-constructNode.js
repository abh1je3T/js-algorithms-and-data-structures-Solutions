function constructNote(message, letters) {
    // Create a frequency counter for the letters
    const letterCount = {};
    
    // Count frequency of each letter in the 'letters' string
    for (let char of letters) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  
    // Check if each character in the message can be built from letters
    for (let char of message) {
      if (!letterCount[char]) {
        // If the character doesn't exist or is exhausted, return false
        return false;
      }
      letterCount[char]--;  // Use one instance of this character
    }
  
    return true;
  }