// Sequence generator
// Implement function sequence, which returns new n-size Array filled according to pattern.
// a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
// number, string or any other object, then filled by copying, this object n-times.

function sequence(n, pattern) {
  // new n-size Array filled by pattern
  return typeof pattern === "function"
    ? Array.from({ length: n }, (value, index) => pattern(value, index))
    : new Array(n).fill(pattern);
}
