// Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

function middleEarth(arr) {
  return Math.abs(arr.indexOf("Frodo") - arr.indexOf("Sam") === 1) ||
    Math.abs(arr.indexOf("Sam") - arr.indexOf("Frodo") === 1)
    ? true
    : false;
}
