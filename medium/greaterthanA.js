// Next Number Greater Than A and B and Divisible by B
// You are given two numbers a and b. Create a function that returns the next number greater than a and b and divisible by b.
function divisibleByB(a, b) {
  let rem = (a + b) % b;
  if (rem == 0) {
    return a;
  } else return a + b - rem;
}
