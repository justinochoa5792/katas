// Merging sorted integer arrays (without duplicates)
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  // your code here
  let merged = a.concat(b);
  return Array.from(new Set(merged)).sort((a, b) => a - b);
}
