// String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

function stringPairs(str) {
  return (str + "*").match(/../g) || [];
}
