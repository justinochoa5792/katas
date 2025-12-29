// Alternate Square Sum
// Complete the function that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

function alternateSqSum(arr) {
  // happy coding :D
  return arr
    .map((el, i) => (i % 2 !== 0 ? el ** 2 : el))
    .reduce((a, b) => a + b, 0);
}
