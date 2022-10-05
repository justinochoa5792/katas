// Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

function XO(str) {
  let x = str
    .toLowerCase()
    .split("")
    .filter((item) => item === "x").length;
  let o = str
    .toLowerCase()
    .split("")
    .filter((item) => item === "o").length;
  return x === o ? true : false;
}
