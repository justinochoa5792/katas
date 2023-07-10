// Find the Unique Letters
// Create a function that takes a string and returns an array of the letters that occur only once.

function findLetters(str) {
  return str
    .split("")
    .filter((el, i) => str.indexOf(el) === str.lastIndexOf(el));
}
