// N-Sized Parts
// Create a function that divides a string into parts of size n.

function partition(str, n) {
  let regex = new RegExp(".{1," + n + "}", "g");
  return str.match(regex);
}
