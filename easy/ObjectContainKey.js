// Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

function hasKey(obj, key) {
  return Object.keys(obj).includes(key) ? true : false;
}
