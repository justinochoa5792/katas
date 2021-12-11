// Automorphic Number
// A number is called Automorphic number if its square ends in the original number. Create a function that takes a number n and returns true if it is an Automorphic number, otherwise false.

function automorphic(n) {
  let num = Math.pow(n, 2);
  return num.toString().endsWith(n);
}
