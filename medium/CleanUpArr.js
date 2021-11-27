// Cleaning Up Messy ArraysCreate a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(arr) {
  let even = arr.map(Number).filter((x) => x % 2 == 0);
  let odd = arr.map(Number).filter((x) => x % 2 != 0);

  return [even, odd];
}
