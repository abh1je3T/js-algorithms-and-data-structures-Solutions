
function selectionSort(arr, comparator) {
    // Default comparator if none is provided
    if (typeof comparator !== 'function') {
      comparator = function(a, b) {
        return a - b;
      };
    }
  
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (comparator(arr[j], arr[minIndex]) < 0) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap the elements
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  