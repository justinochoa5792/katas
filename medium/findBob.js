// Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

function findBob(names) {
  return names.findIndex((name) => name === "Bob");
}
