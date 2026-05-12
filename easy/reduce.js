// Reduce My Fraction
// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

function reduce([a, b]) {
  function gcd(x, y) {
    while (y) {
      [x, y] = [y, x % y];
    }
    return x;
  }

  let d = gcd(a, b);

  return [a / d, b / d];
}
