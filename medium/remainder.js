// Finding Remainder Without Using '%' Operator
// Write a method remainder which takes two integer arguments, dividend and divisor, and returns the remainder when dividend is divided by divisor. Do NOT use the modulus operator (%) to calculate the remainder!

function remainder(D, d) {
  let q = parseInt(D / d);
  let p = q * d;
  return D - p;
}
