// Valid Parentheses
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parenStr) {
  let count = 0;

  for (let char of parenStr) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}
