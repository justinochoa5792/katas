// Sum of a Beach
// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

function sumOfABeach(beach) {
  // your code here
  let sum = beach.match(/(sun|sand|water|fish)/gi);
  return sum == null ? 0 : sum.length;
}
