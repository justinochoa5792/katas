// All Star Code Challenge #3
// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

var removeVowels = function (str) {
  //code here
  return str.replace(/[aeiou]/gi, "");
};
