// How Much is True?
// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
  const result = arr.filter((choice) => choice).length;
  return result;
}
