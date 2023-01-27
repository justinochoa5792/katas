// Compound Interest
// Create a function that accepts the principal p, the term in years t, the interest rate r, and the number of compounding periods per year n. The function returns the value at the end of term rounded to the nearest cent.

function compoundInterest(p, t, r, n) {
  let total = Number(p * Math.pow(1 + r / n, n * t)).toFixed(2);
  return Number(total);
}
