// Does my number look big in this?
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

function narcissistic(value) {
  // Code me to return true or false
  let length = value.toString().split("").length;
  let arr = value
    .toString()
    .split("")
    .map((el) => Math.pow(Number(el), length));
  return arr.reduce((a, b) => a + b) === value ? true : false;
}
