// Ranged Reversal
// Write a function that reverses the subarray between the start and end index (inclusive). The rest of the array should be kept the same.

function rangedReversal(arr, start, end) {
  let arranged = arr.slice(start, end + 1).reverse();
  arr.splice(start, arranged.length, ...arranged);
  return arr;
}
