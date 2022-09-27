// Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...args) {
  return args.map((item) => Boolean(item)).includes(false) ? false : true;
}
