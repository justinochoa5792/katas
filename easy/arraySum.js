// Sum ALL the arrays!
// You are given an array of values.
// Sum every number value in the array, and any nested arrays (to any depth).
// Ignore all other types of values.

function arraySum(arr) {
  // sum ALL the things!
  return arr
    .flat(Infinity)
    .filter((el) => typeof el == "number")
    .reduce((a, b) => a + b);
}
