// Divisible by previous digit?
// Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

function divisibleByLast(n) {
  // TODO
  let str = n.toString().split("");
  const arr = [false];
  for (let i = 1; i < str.length; ++i) {
    if (str[i] % str[i - 1] === 0) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
}
