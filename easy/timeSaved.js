// Return the Time Saved by Speeding
// Create a function that calculates the amount of time saved were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

function timeSaved(lim, avg, d) {
  let total = (d / lim - d / avg) * 60;
  return Math.abs(total.toFixed(1));
}
