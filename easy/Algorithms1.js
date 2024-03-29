// Algorithms I: Introduction to Recursion
// The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
