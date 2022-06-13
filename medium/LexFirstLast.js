// Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

function firstAndLast(s) {
  return [s.split("").sort().join(""), s.split("").sort().reverse().join("")];
}
