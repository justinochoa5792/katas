// Anagram Detection
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// write the function isAnagram
var isAnagram = function (test, original) {
  test = test.toLowerCase().split("").sort().join("");
  original = original.toLowerCase().split("").sort().join("");

  if (test.length !== original.length || test !== original) {
    return false;
  } else {
    return true;
  }
};
