// Return First and Last Parameter
// Write two functions:
// firstArg() should return the first parameter passed in.
// lastArg() should return the last parameter passed in.

function firstArg() {
  return arguments[0];
}

function lastArg() {
  return arguments[arguments.length - 1];
}
