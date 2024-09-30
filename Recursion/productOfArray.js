// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(numArr) {
    // Base case: If the array is empty, return 1 (product of no numbers is 1)
    if (numArr.length === 0) {
      return 1;
    } else {
      // Recursive case: Return the first element multiplied by the product of the remaining elements
      return numArr[0] * productOfArray(numArr.slice(1));
    }
  }