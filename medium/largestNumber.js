//  Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

function largestNumbers(n, arr) {
  return arr.sort((a, b) => a - b).slice(arr.length - n);
}
