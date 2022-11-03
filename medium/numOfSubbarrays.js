// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

function numOfSubbarrays(arr) {
  let x = arr.map((item) => Array.isArray(item));
  return x.includes(true) ? arr.length : 0;
}
