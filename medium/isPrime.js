// Check if a Number is Prime
// Create a function that returns true if a number is prime, and false otherwise. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself.

function isPrime(num) {
  let sqrt = Math.sqrt(num);
  if (num <= 1) return false;
  if (num === 2) return true;
  for (var i = 2; i <= sqrt; i++) if (num % i === 0) return false;
  return true;
}
