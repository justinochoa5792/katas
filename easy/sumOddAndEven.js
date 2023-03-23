// Write a function that takes an array of numbers and returns an array with two elements:
//The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.

function sumOddAndEven(arr) {
  let total = [];
  let even = arr.filter((el) => el % 2 === 0).reduce((a, b) => a + b, 0);
  let odd = arr.filter((el) => el % 2 !== 0).reduce((a, b) => a + b, 0);
  total.push(even, odd);
  return total;
}
