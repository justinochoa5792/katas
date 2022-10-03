// Purge and Organize
// Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.

function uniqueSort(arr) {
  return arr
    .filter((item, pos) => {
      return arr.indexOf(item) == pos;
    })
    .sort((a, b) => a - b);
}
