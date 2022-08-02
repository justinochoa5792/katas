// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

function set(arr) {
  return [...new Set(arr)];
}
