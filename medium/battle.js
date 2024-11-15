// Battle of the characters (Easy)
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

function battle(x, y) {
  // Lets the battle begin!
  let first = x
    .split("")
    .map((el) => el.toLowerCase().charCodeAt(0) - 96)
    .reduce((a, b) => a + b);
  let second = y
    .split("")
    .map((el) => el.toLowerCase().charCodeAt(0) - 96)
    .reduce((a, b) => a + b);

  return first > second ? x : first == second ? "Tie!" : y;
}
