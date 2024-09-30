function minCoinChange(coins, amount) {
    const result = [];
  
    // Traverse the coins array from largest to smallest
    for (let i = coins.length - 1; i >= 0; i--) {
      const coin = coins[i];
      
      // While the coin can be used, reduce the amount and add the coin to the result
      while (amount >= coin) {
        amount -= coin;
        result.push(coin);
      }
    }
  
    // Return the result array
    return result;
  }