// Reverse the Number
// Create a function that takes an integer n and reverses it.

function rev(n) {
  let num = n < 0 ? n * -1 : n;
  return num.toString().split("").reverse().join("");
}
