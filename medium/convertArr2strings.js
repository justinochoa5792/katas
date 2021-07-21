// Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

function parseArray(arr) {
  return arr.map((newArr) => {
    return newArr.toString();
  });
}
