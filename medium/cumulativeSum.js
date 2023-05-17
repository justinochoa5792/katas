// Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

function cumulativeSum(arr) {
  return arr.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  );
}
