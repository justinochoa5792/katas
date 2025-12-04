// Sum of squares less than some number
// Write a function getNumberOfSquares (C, F#, Haskell) / get_number_of_squares (Python, Ruby) that will return how many integer (starting from 1, 2...) numbers raised to power of 2 and then summed up are less than some number given as a parameter.

function getNumberOfSquares(n) {
  let total = 0;
  let i = 1;

  while (true) {
    let square = i ** 2;

    if (total + square >= n) {
      break;
    }

    total += square;
    i++;
  }

  return i - 1;
}
