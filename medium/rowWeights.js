// Row Weights
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  //your code here
  let team1 = [];
  let team2 = [];
  array.map((el, i) => (i % 2 === 0 ? team1.push(el) : team2.push(el)));
  team1 = team1.reduce((a, b) => a + b, 0);
  team2 = team2.reduce((a, b) => a + b, 0);

  return [team1, team2];
}
