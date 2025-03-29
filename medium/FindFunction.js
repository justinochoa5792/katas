// Find the anonymous function
// Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.

var FindFunction = function (func, arr) {
  let foundFunc = func.filter((el) => !Number.isInteger(el));
  return arr.filter((el) => foundFunc[0](el));
};
