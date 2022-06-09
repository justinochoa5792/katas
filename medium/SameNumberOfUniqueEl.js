// Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise

function same(a1, a2) {
  return new Set(a1).size === new Set(a2).size ? true : false;
}
