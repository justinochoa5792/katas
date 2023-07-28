// Split String by Identical Characters
// Create a function that splits a string into an array of identical clusters.

function splitGroups(str) {
  return str.match(/(.)\1*/g);
}
