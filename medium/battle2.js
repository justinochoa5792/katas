// Battle of the characters (Medium)
// Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.
// Each character has its own power:
//   A = 1, B = 2, ... Y = 25, Z = 26
//   a = 0.5, b = 1, ... y = 12.5, z = 13
// Only alphabetical characters can and will participate in a battle.
// Only two groups to a fight.
// Group whose total power (a + B + c + ...) is bigger wins.
// If the powers are equal, it's a tie.

function battle(x, y) {
  // Lets the battle begin!
  let number1 = x
    .split("")
    .map((el) =>
      el === el.toLowerCase()
        ? (el.charCodeAt() - 96) / 2
        : el.toLowerCase().charCodeAt() - 96
    )
    .reduce((a, b) => a + b);
  let number2 = y
    .split("")
    .map((el) =>
      el === el.toLowerCase()
        ? (el.charCodeAt() - 96) / 2
        : el.toLowerCase().charCodeAt() - 96
    )
    .reduce((a, b) => a + b);
  return number1 > number2 ? x : number1 === number2 ? "Tie!" : y;
}
