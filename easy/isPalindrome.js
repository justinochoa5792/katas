// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code here
  let pali = x.toLowerCase().split("").reverse().join("");
  return pali === x.toLowerCase() ? true : false;
}
