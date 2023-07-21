// Car Timer 🏎️
// Given the number of minutes n at the end of the ride, calculate the current time. Return the sum of digits that the digital timer in the format hh:mm will show at the end of the ride.

function carTimer(n) {
  let min = new Date(n * 60 * 1000)
    .toISOString()
    .substr(11, 8)
    .split("")
    .filter((el) => el !== ":");
  return min.reduce((a, b) => Number(a) + Number(b));
}
