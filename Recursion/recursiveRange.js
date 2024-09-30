function recursiveRange(num) {
    // Base case: If num is 0, return 0 (sum of no numbers)
    if (num === 0) {
      return 0;
    } else {
      // Recursive case: Return the current number plus the sum of the remaining numbers (0 to num-1)
      return num + recursiveRange(num - 1);
    }
  }