// MinMaxMin: Bounded Nums
// You solution should return an array [smallest, minimumAbsent, largest] The smallest integer should be the integer from the array with the lowest value. The largest integer should be the integer from the array with the highest value. The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

function minMinMax(array) {
  // solution goes here!
  const min = Math.min(...array);
  const max = Math.max(...array);

  const set = new Set(array);

  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      return [min, i, max];
    }
  }
}
