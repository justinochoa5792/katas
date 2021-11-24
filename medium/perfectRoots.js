// Perfect Roots
// Given a number n, find if its 2nd, 4th and 8th roots are all integers (perfect roots), return true if it exists, false if not.

function perfectRoots(n) {
  let num = Math.sqrt(n);
  return Number.isInteger(num) ? true : false;
}
