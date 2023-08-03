// Every Value Needs Some Testing (To Pass)
// Create a function that returns true or false, depending on the result of the test applied to the variables.

function everySome(test, type, a, b, c, d, e) {
  let arr = [a, b, c, d, e];
  return type === "everybody"
    ? arr.every((el) => eval(el + test))
    : arr.some((el) => eval(el + test));
}
