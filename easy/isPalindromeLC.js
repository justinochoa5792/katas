// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num = x.toString().split("").reverse().join("");
  console.log(num);
  return num == x;
};
