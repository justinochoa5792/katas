// Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

function mapping(letters) {
  let obj = {};
  for (const key of letters) {
    obj[key] = key.toUpperCase();
  }
  return obj;
}
