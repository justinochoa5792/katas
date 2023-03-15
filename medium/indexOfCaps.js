// Return the Index of All Capital Letters
// Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.

function indexOfCaps(str) {
  let index = str.match(/[A-Z]/g);
  return index === null ? [] : index.map((cap) => str.indexOf(cap));
}
