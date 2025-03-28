// Fibonacci's FizzBuzz
// The goal of this kata is two-fold:
// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

var fibsFizzBuzz = function (n) {
  // Your code here.
  if (n === 1) return [1];

  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.map((el) =>
    el % 3 == 0 && el % 5 == 0
      ? "FizzBuzz"
      : el % 5 == 0
      ? "Buzz"
      : el % 3 == 0
      ? "Fizz"
      : el
  );
};
