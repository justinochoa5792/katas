// Last Digit Ultimate
// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.

function lastDig(a, b, c) {
  a = a.toString().slice(-1);
  b = b.toString().slice(-1);
  c = c.toString().slice(-1);
  let total = Number(a) * Number(b);
  total = total.toString().slice(-1);
  return Number(total) === Number(c) ? true : false;
}
