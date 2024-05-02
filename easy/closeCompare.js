//Compare within margin
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

function closeCompare(a, b, margin) {
  // ...
  margin === undefined ? (margin = 0) : margin;
  if (Math.abs(a - b) <= margin) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}
