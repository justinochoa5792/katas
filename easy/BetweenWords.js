// Between Words
// Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

function isBetween(first, last, word) {
  return word > first && word < last ? true : false;
}
