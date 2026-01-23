// Everything Is Even
// Write a function that will convert any number to its nearest even number. When the number is halfway between two even numbers it should round away from zero.

function ensureEven(n) {
  // Code on squire...
  return Math.round(n) % 2 == 0
    ? Math.round(n)
    : Math.round(n) > 0
      ? Math.round(n) + 1
      : Math.round(n) - 1;
}
