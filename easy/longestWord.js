// Inspiring Strings
// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

function longestWord(stringOfWords) {
  // Give me back the longest word!
  return stringOfWords
    .split(" ")
    .reduce((a, b) => (a.length > b.length ? a : b));
}
