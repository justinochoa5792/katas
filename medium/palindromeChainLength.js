// Palindrome chain length
// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

var palindromeChainLength = function (n, idx = 0) {
  let reverse = Number(n.toString().split("").reverse().join(""));

  if (n === reverse) {
    return idx;
  } else {
    idx++;
    return palindromeChainLength(n + reverse, idx);
  }
};
