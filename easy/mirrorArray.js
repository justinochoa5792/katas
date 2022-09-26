// Mirror Array
// Given an integer array, transform that array into a mirror.

function mirror(arr) {
  let reverse = arr.slice(0, arr.length - 1).reverse();
  return arr.concat(reverse);
}
