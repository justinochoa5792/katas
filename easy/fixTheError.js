// Fix the error
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// original
// Fix this incorrect code so that all tests pass!
function removeEmptyArrays(arr) {
  return arr.filter((x) => x !== []);
}

// fix
// Fix this incorrect code so that all tests pass!
function removeEmptyArrays(arr) {
  return arr.filter((x) => x.length !== 0);
}
