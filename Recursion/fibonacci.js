function fib(n) {
    // Base cases:
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      // Recursive case: nth number is sum of (n-1)th and (n-2)th numbers
      return fib(n - 1) + fib(n - 2);
    }
  }