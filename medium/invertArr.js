// Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

function invertArray(arr) {
  if (arr == 0) {
    return arr;
  } else return arr.map((num) => num * -1);
}
