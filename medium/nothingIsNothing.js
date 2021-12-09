// Nothing is Nothing?
// Given any number of parameters, return true if none of the arguments are falsy.

function nothingIsNothing() {
  return [...arguments].every((x) => x);
}
