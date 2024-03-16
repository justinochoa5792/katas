// Sum of Odd Cubed Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  // insert code here >.<
  let total = arr
    .filter((el) => el % 2 !== 0)
    .map((el) => Math.pow(el, 3))
    .reduce((a, b) => a + b, 0);
  return !Number.isInteger(total) ? undefined : total;
}
