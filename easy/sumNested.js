// Sum of a nested list
// Implement a function to calculate the sum of the numerical values in a nested list. For example :

const sumNested = (arr) => {
  //
  return arr.flat(20).reduce((a, b) => a + b, 0);
};
