// Is the Number a Prime? (with a twist)
// Write a function that takes a number and returns true if it's a prime; false otherwise. The number can be 2^64-1 (2 to the power of 63, not XOR). With the standard technique it would be O(2^64-1), which is much too large for the 10 second time limit imposed by Edabit.

function prime(x) {
  for (let i = 2, s = Math.sqrt(x); i <= s; i++) {
    if (x % i === 0) return false;
  }
  return x > 1;
}
