function findPair(arr, n) {
    const set = new Set();
  
    for (let num of arr) {
      // Check if a pair with the difference 'n' exists
      if (set.has(num - n) || set.has(num + n)) {
        return true;
      }
      // Add the current number to the set
      set.add(num);
    }
  
    // If no pair is found
    return false;
  }