function getDigit(num, pos) {
    // Convert the number to a string for easier manipulation
    let numStr = num.toString();
  
    // Handle negative numbers by removing the minus sign
    if (numStr[0] === '-') {
      numStr = numStr.slice(1);
    }
  
    // Access the digit at the specified position (right to left)
    const digit = numStr[numStr.length - 1 - pos];
  
    // If the position is out of bounds, return 0
    return digit ? parseInt(digit) : 0;
  }