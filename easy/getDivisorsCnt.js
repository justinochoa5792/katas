// Count the divisors of a number
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000, but fixed tests go higher.

function getDivisorsCnt(n) {
  let count = 0;
  let limit = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) {
      count += 2;
    }
  }

  if (limit * limit === n) count--;

  return count;
}
