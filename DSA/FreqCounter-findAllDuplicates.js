function findAllDuplicates(nums) {
    const result = [];
  
    // Traverse the array
    for (let i = 0; i < nums.length; i++) {
      // Get the index corresponding to the current element
      const index = Math.abs(nums[i]) - 1;
  
      // If the number at that index is negative, it means we've seen this number before
      if (nums[index] < 0) {
        result.push(Math.abs(nums[i]));  // Add the current number to the result
      } else {
        // Otherwise, negate the number at that index to mark it as visited
        nums[index] = -nums[index];
      }
    }
  
    // Return the result array with all duplicates
    return result;
  }