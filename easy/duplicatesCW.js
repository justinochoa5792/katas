// Find Duplicates
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  return Array.from(
    new Set(arr.filter((item, index) => arr.indexOf(item) !== index))
  );
}
