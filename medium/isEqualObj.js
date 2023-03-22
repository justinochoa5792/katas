// Check If objOne Is Equal to objTwo
// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

function isEqual(objOne, objTwo) {
  return JSON.stringify(objOne) == JSON.stringify(objTwo);
}
