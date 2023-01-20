// Power of Two
// Write a function that returns true if an integer can be expressed as a power of base value 2 and false otherwise.

function powerOfTwo(num) {
  return num && (num & (num - 1)) === 0;
}
