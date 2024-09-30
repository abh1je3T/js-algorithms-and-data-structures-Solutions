function merge(arr1, arr2, comparator = (a, b) => a - b) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (comparator(arr1[i], arr2[j]) <= 0) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
  
  function mergeSort(arr, comparator = (a, b) => a - b) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle), comparator);
    const right = mergeSort(arr.slice(middle), comparator);
  
    return merge(left, right, comparator);
  
  }
  