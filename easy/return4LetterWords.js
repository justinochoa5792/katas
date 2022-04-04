// Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr) {
  return arr.filter((word) => word.length === 4);
}
