// Typing Game
// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

function correctStream(user, correct) {
  return correct.map((word) => (user.indexOf(word) !== -1 ? 1 : -1));
}
