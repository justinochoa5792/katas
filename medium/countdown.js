// Making a Countdown
// Put a full stop after each number and uppercase and add an exclamation mark to the word. See the examples below for clarification!

function countdown(n, str) {
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(`${i}.`);
  }
  arr.push(`${str.toUpperCase()}!`);
  return arr.join(" ");
}
