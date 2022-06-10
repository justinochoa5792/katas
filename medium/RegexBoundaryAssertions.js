// RegEx: Boundary Assertions II
// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

function acceptedWords(arr) {
  return arr.filter((word) => !word.startsWith("C"));
}
