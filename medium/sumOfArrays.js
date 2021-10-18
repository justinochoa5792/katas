// Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
  let sum = arr.reduce(function (total, amount) {
    return total + amount;
  });
  return sum;
}
