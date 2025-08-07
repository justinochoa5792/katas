// Extra Perfect Numbers (Special Numbers Series #7)
// An extra perfect number is a positive integer whose first and last bits in binary representation are set (i.e., both are 1).

function extraPerfect(n) {
  //your code here
  let total = [];
  for (let i = 1; i <= n; i++) {
    if (i.toString(2).slice(0, 1) == i.toString(2).slice(-1)) {
      total.push(i);
    }
  }
  return total;
}
