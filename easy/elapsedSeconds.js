// Elapsed Seconds
// Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

function elapsedSeconds(startDate, endDate) {
  return (endDate.getTime() - startDate.getTime()) / 1000;
}
