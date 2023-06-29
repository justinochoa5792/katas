// Fix The Error: Array Reduce
// The instructor assigns Boron two tasks (regarding the use of reduce() method after lecturing in array methods).
// The first task is to create a function calculateSum() that takes a string and returns the sum of the ASCII values of all the characters in the string using reduce().
// The second task is to create a function reverseString() that reverses and returns an input string using reduce().
// While solving the problem, Boron has encountered errors. Help him fix the errors.

function calculateSum(txt) {
  return txt
    .split("")
    .map((el) => el.charCodeAt())
    .reduce((a, b) => a + b);
}

function reverseString(txt) {
  return txt.split("").reduce((a, b) => b + a, "");
}
