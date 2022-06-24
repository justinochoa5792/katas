// Retrieve the Last N Elements
// Write a function that retrieves the last n elements from an array.

function last(a, n) {
  return n > a.length
    ? "invalid"
    : n === 0
    ? []
    : a.slice(a.length - n, a.length);
}
