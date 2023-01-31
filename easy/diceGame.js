// Don't Roll Doubles!
// Create a function which takes in a matrix as input, and return John's score after his game has ended.

function diceGame(arr) {
  return arr.some((i) => i[0] === i[1])
    ? 0
    : arr.flat().reduce((a, b) => a + b);
}
