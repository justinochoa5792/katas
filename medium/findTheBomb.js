// Find the Bomb
// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

function bomb(str) {
  return str.match(/bomb/gi) ? "Duck!!!" : "There is no bomb, relax.";
}
