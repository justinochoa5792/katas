// Reverse Factorials
// Your challenge is to create a function that takes any number and returns the number that it is a factorial of. So, if your function receives 120, it should return "5!" (as a string).
// Of course, not every number is a factorial of another. In this case, your function would return "None" (as a string).

function reverseFactorial(num) {
  // happy coding!
  let i = 1;
  let factorial = 1;
  while (factorial < num) {
    i++;
    factorial *= i;
  }
  if (factorial === num) {
    return `${i}!`;
  } else {
    return "None";
  }
}
