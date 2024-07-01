// Two Oldest Ages
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}
