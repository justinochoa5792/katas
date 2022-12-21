// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

function identicalFilter(arr) {
  return arr.filter((i) => new Set(i).size === 1);
}
