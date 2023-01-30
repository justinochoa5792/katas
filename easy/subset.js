// Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

function subset(arr1, arr2) {
  return arr1.every((val) => arr2.includes(val));
}
