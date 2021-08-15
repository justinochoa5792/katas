// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
  return arr.map((x) => {
    return typeof x;
  });
}
