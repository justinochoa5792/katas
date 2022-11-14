// War of Numbers
// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

function warOfNumbers(arr) {
  let even = arr.filter((item) => item % 2 === 0).reduce((a, b) => a + b);
  let odd = arr.filter((item) => item % 2 == 1).reduce((a, b) => a + b);
  return Math.abs(even - odd);
}
