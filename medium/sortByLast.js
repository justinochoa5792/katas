// Sort a String by Its Last Character
// Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.

function sortByLast(str) {
  return str
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    .join(" ");
}
