//  Numbers with this digit inside
// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.
// You have to return as an array
// the count of these numbers,
// their sum
// and their product.

function numbersWithDigitInside(x, d) {
  let total = [];
  for (let i = 1; i <= x; i++) {
    total.push(i);
  }
  total = total.filter((el) => el.toString().includes(d));
  return total.length == 0
    ? [0, 0, 0]
    : [
        total.length,
        total.reduce((a, b) => a + b),
        total.reduce((a, b) => a * b),
      ];
}
