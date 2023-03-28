// shortestDistance
// Create a function that takes a string of four numbers. These numbers represent two separate points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis).
// The order of coordinates in the string corresponds as follows:

function shortestDistance(str) {
  let split = str.split(",").map((el) => Number(el));
  let total = Math.hypot(split[2] - split[0], split[3] - split[1]).toFixed(2);
  return Number(total);
}
