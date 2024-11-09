// Katastrophe!
// You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.
// Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.

function strongEnough(earthquake, age) {
  //your code here
  let magnitude = earthquake
    .map((el) => el.reduce((a, b) => a + b))
    .reduce((a, b) => a * b);
  let decay = 1000 * Math.exp(-0.01 * age);
  return magnitude < decay ? "Safe!" : "Needs Reinforcement!";
}
