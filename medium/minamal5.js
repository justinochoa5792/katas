// Minimal V:
// Write a function that returns the boolean true if the given arrays do not share any numbers, and false otherwise.

function notShare(arr1, arr2) {
  for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) return false;
    }
  }
  return true;
}
