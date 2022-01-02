// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj) {
  let key = Object.keys(obj);
  let value = Object.values(obj);
  return [key, value];
}
