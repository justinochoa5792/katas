// Multiply by Length
// Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr) {
  let multi = arr.length;
  return arr.map((x) => x * multi);
}
