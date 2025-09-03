// Simple Maths Test
// Create a function which checks a number for three different properties.
// is the number prime?
// is the number even?
// is the number a multiple of 10?

function numberProperty(n) {
  let isPrime = true;

  if (n <= 1) {
    isPrime = false;
  } else if (n <= 3) {
    isPrime = true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    isPrime = false;
  } else {
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        isPrime = false;
        break; // no need to keep checking
      }
    }
  }

  return [isPrime, n % 2 === 0, n % 10 === 0];
}
