// Divisible by Left Digit?
// Create a function that takes a number n and checks if each digit is divisible by the digit on its left. Return a boolean array depending on the condition checks.

function divisibleByLeft(n) {
  const str = n.toString();
  const arr = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i] % str[i - 1] === 0) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
}
