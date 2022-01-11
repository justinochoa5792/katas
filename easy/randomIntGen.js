// Random Integer Generator
// The challenge is simple. Return a random integer N such that a <= N <= b.

function randomInt(a, b) {
  min = Math.ceil(a);
  max = Math.floor(b);
  return Math.floor(Math.random() * (max - min) + min);
}
