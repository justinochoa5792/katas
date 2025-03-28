// Sorted Union
// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...args) {
  //your code here
  return Array.from(new Set(args.flat(Infinity)));
}
