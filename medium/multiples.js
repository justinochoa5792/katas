// Return the first M multiples of N
// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

function multiples(m, n) {
  // code here
  let total = [];
  for (let i = 1; i <= m; i++) {
    total.push(i);
  }
  return total.map((el) => el * n);
}
