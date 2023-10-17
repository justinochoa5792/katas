// Fizz Buzz
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// Return an array
function fizzbuzz(n) {
  //
  let total = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      total.push("FizzBuzz");
    } else if (i % 3 === 0) {
      total.push("Fizz");
    } else if (i % 5 === 0) {
      total.push("Buzz");
    } else {
      total.push(i);
    }
  }
  return total;
}
