// Check if the String is a Palindrome
// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  return str.split("").reverse().join("") === str ? true : false;
}
