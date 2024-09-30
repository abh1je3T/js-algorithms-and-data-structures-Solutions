function insertionSort(arr, comparator = (a, b) => a - b) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && comparator(arr[j], key) > 0) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  
    return arr;
  }