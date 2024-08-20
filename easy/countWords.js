// Count words
// Can you implement a function that will return number of words in a string?

function countWords(str) {
  // ...
  return str.split(/\s/).filter((el) => el !== "").length;
}
