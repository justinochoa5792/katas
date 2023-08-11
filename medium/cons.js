// Consecutive Numbers
// Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.

function cons(arr) {
  return arr
    .sort((a, b) => a - b)
    .every((num, i) => arr[i + 1] - num === 1 || arr[i + 1] === undefined);
}
