// Not Not Not True
// Something which is not true is false, but something which is not not true is true! Create a function where given n number of "not", evaluate whether it's true or false.

function notNotNot(n, bool) {
  return n % 2 !== 0 && bool === false ? true : false;
}
