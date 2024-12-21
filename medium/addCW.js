// Sum it continuously
// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

function add(arr) {
  return arr.map((el, idx) => arr.slice(0, idx + 1).reduce((a, b) => a + b, 0));
}
