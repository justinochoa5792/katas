// Sum of Decimals
// Captain Obvious is asked to implement a simple function that given two decimal numbers A and B returns their sum.
// "Easy one!" he thinks, but soon he discovers that his function fails over fifty percent of given test cases! He suspects the test cases are wrong, but his calculator is saying they're correct! What's happening?
// Can you help Captain Obvious to debug his function and solve the exercise?

function floatSum(A, B) {
  return Number((A + B).toFixed(6));
}
