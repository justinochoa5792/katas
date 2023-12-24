// Digitize
// Given a non-negative integer, return an array / a list of the individual digits in order.

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((num) => Number(num));
}
