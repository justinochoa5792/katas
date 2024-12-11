// How many stairs will Suzuki climb in 20 years?
// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

function stairsIn20(s) {
  //your code here
  return s.flat().reduce((a, b) => a + b) * 20;
}
