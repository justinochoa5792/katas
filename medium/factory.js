// Function Function
// Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

function factory(num) {
  return function first(arr) {
    return arr.map((x) => x / num);
  };
}
