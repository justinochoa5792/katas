// No oddities here
// Write a small function that returns the values of an array that are not odd.

function noOdds(values) {
  // Return all non-odd values
  return values.filter((el) => el % 2 === 0);
}
