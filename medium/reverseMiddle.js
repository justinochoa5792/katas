// Slice the middle of a list backwards
// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

function reverseMiddle(array) {
  let median = Math.floor(array.length / 2);
  return array.length % 2 == 0
    ? array.slice(median - 1, median + 1).reverse()
    : array.slice(median - 1, median + 2).reverse();
}
