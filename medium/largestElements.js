// Largest Elements
// Write a program that outputs the top n elements from a list.

function largest(n, array) {
  // Find the n highest elements in a list
  let sorted = array.sort((a, b) => b - a);
  return sorted.splice(0, n).reverse();
}
