//Find the Remainder
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  return n > m ? n % m : m % n;
}
