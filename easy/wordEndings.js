//  Word Endings
// Create a function that adds a string ending to each member in an array.

function addEnding(arr, ending) {
  return arr.map((word) => `${word + ending}`);
}
