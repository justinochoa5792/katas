// Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

function minimumRemovals(arr) {
  return arr.reduce((a, b) => a + b) % 2 === 0 ? 0 : 1;
}
