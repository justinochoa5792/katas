// How Many Days Between Two Dates
// Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(date1, date2) {
  let d1 = new Date(date1).getTime();
  let d2 = new Date(date2).getTime();
  let total = d2 - d1;
  return total / (1000 * 3600 * 24);
}
