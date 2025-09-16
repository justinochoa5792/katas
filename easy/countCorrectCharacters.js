// Consider a game, wherein the player has to guess a target word. All the player knows is the length of the target word.
// To help them in their goal, the game will accept guesses, and return the number of letters that are in the correct position.
// Write a method that, given the correct word and the player's guess, returns this number.

function countCorrectCharacters(correctWord, guess) {
  // Code here
  if (correctWord.length !== guess.length) {
    throw "error";
  } else {
    return [...guess].filter((ch, i) => ch === correctWord[i]).length;
  }
}
