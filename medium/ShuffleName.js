// Shuffle the Name
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

function nameShuffle(str) {
  return str.split(" ").reverse().join(" ");
}
