// Hidden Calculator Words
// Given a number, create a function that converts it into a word by turning the integer 180 degrees around.

function turnCalc(num) {
  const chars = {
    "1": "I",
    "2": "Z",
    "3": "E",
    "4": "H",
    "5": "S",
    "6": "G",
    "7": "L",
    "8": "B",
    "9": "-",
    "0": "O",
    ".": "",
  };
  return num
    .toString()
    .replace(/[0-9.]/g, (el) => chars[el])
    .split("")
    .reverse()
    .join("");
}
