// Currying Functions
// Create a function which takes a array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

function multiply(arr) {
  return function (n) {
    return arr.map((item) => item * n);
  };
}
