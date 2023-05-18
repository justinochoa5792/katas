// Stretched Words
// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

function unstretch(word) {
  return word.replace(/(.)\1+/g, "$1");
}
