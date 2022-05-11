// Is the String a Palindrome?
// A palindrome is a word that is identical forward and backwards.
// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  return str === reverse ? true : false;
}
