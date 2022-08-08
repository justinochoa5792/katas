// Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
// Broken Solution
function clone(arr) {
  arr.push(arr);
  return arr;
}

// My Fixed Solution
function clone(arr) {
  let arrCopy = [];
  arrCopy.push(...arr, arr);
  return arrCopy;
}
