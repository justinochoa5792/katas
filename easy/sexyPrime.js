// Sexy Primes <3
// Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.

function sexyPrime(x, y) {
  const prime = (n) =>
    n > 1 && [...Array(n - 2)].every((_, i) => n % (i + 2) !== 0);

  return Math.abs(x - y) === 6 && prime(x) && prime(y);
}
