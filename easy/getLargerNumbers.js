// Number Pairs
// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

function getLargerNumbers(a, b) {
  return a.map((item, i) => Math.max(item, b[i]));
}
