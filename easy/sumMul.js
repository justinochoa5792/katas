// Sum of Multiples
// Find the sum of all multiples of n below m

function sumMul(n, m) {
  //your idea here
  let total = [];
  for (let i = n; i < m; i++) {
    if (i % n === 0) {
      total.push(i);
    }
  }
  return total.length === 0 ? "INVALID" : total.reduce((a, b) => a + b);
}
