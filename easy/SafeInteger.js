// Is integer safe to use?
// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

function SafeInteger(n) {
  return Number.isSafeInteger(n);
}
