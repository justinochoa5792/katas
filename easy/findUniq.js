// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  // do magic
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))[0];
}
