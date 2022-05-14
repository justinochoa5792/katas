// Check if a Number is a Palindrome
// Write a function that returns true if a number is a palindrome.

function isPalindrome(n) {
  let pali = n.toString().split("").reverse().join("");
  return Number(pali) === n ? true : false;
}
