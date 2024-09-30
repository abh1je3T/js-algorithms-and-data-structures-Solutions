function coinChange(denominations, value) {
    // Create an array to store the number of ways to make each amount
    const dp = Array(value + 1).fill(0);
    dp[0] = 1; // There is 1 way to make 0 value (by using no coins)
  
    // Iterate over each denomination
    for (let coin of denominations) {
      // Update the dp array for each value from coin to the target value
      for (let i = coin; i <= value; i++) {
        dp[i] += dp[i - coin];
      }
    }
  
    // Return the number of ways to make the target value
    return dp[value];
  }