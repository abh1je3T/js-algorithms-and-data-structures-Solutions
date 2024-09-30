function bubbleSort(arr, comparator) {
    // Default comparator if none is provided
    if (typeof comparator !== 'function') {
      comparator = function(a, b) {
        return a - b;
      };
    }
  
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
  
    return arr;
  }