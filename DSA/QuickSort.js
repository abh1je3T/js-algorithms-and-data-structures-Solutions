function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    // Function to swap two elements in the array
    function swap(array, i, j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    // Set the pivot to be the start element
    let pivotValue = arr[start];
    let swapIdx = start;
  
    // Loop through the array, starting from start + 1 to end
    for (let i = start + 1; i <= end; i++) {
      if (comparator) {
        // If comparator is provided, use it to compare elements
        if (comparator(arr[i], pivotValue) < 0) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      } else {
        // If no comparator is provided, use default comparison
        if (arr[i] < pivotValue) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }
    }
  
    // Swap the start element (pivot) with the pivot's correct position
    swap(arr, start, swapIdx);
  
    // Return the index where the pivot ends up
    return swapIdx;
  }
  
  function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
    // Base case: if the segment has one or zero elements, it's already sorted
    if (left < right) {
      // Use the pivot function to partition the array
      let pivotIndex = pivot(arr, comparator, left, right);
  
      // Recursively apply quickSort to the left and right parts
      quickSort(arr, comparator, left, pivotIndex - 1);
      quickSort(arr, comparator, pivotIndex + 1, right);
    }
    return arr;
  }