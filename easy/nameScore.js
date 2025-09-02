// What is my name score? #1
// The 26 letters of the English alphabets are randomly divided into 5 groups of 5 letters with the remaining letter being ignored. Each of the group is assigned a score of more than 0. The ignored letter always has a score of 0.
// With this kata, write a function to work out the score of a name that is passed to the function.

function nameScore(name) {
  // Insert your brilliant code here
  let chars = {
    "A": 1,
    "B": 1,
    "C": 1,
    "D": 1,
    "E": 1,
    "F": 2,
    "G": 2,
    "H": 2,
    "I": 2,
    "J": 2,
    "K": 3,
    "L": 3,
    "M": 3,
    "N": 3,
    "O": 3,
    "P": 4,
    "Q": 4,
    "R": 4,
    "S": 4,
    "T": 4,
    "U": 5,
    "V": 5,
    "W": 5,
    "X": 5,
    "Y": 5,
  };
  let total = name
    .toUpperCase()
    .split("")
    .reduce((sum, ch) => sum + (chars[ch] || 0), 0);
  return { [name]: total };
}
