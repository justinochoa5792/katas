// Array of all primes up to number N
// Code a function which will return an array with all prime numbers smaller than or equal to an arbitrary parameter "n".
// Assume that all parameters will be numbers.

var primeArray = function (n) {
  if (n < 2) return [];

  const primes = [2];

  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;
    for (let j = 0; j < primes.length && primes[j] * primes[j] <= i; j++) {
      if (i % primes[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }

  return primes;
};
