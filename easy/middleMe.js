// Middle Me
// Write a function that will take a key of X and place it in the middle of Y repeated N times.

function middleMe(N, X, Y) {
  //get a working solution then try to make it less than 70 characters!
  let repeated = N / 2;
  return N % 2 !== 0
    ? X
    : Y.repeat(repeated).concat(X).concat(Y.repeat(repeated));
}
