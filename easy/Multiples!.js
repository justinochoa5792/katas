// Multiples!
// Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. Note: Your program should only return one value

function multiple(x) {
  // Good Luck
  return x % 3 == 0 && x % 5 == 0
    ? "BangBoom"
    : x % 3 !== 0 && x % 5 !== 0
    ? "Miss"
    : x % 5 == 0
    ? "Boom"
    : "Bang";
}
