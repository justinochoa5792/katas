// Product of Two Largest Numbers
// Create a function that takes an array of numbers and returns the product of the largest and second largest UNIQUE numbers in the array. So, if there are multiple of the same highest integer, only count one towards the highest product -- see the examples below for more.

function product(arr) {
  arr = arr.sort((a, b) => b - a);
  let sorted = [...new Set(arr)];
  return sorted.length === 1 ? Math.pow(sorted[0], 2) : sorted[0] * sorted[1];
}
