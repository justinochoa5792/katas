// Sort Numbers in Ascending Order
// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.

function sortNumsAscending(arr) {
  return arr === null || arr == [] || arr === undefined
    ? []
    : arr.sort((a, b) => a - b);
}
