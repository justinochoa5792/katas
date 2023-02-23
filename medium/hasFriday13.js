// Friday the 13th
// Given the month and year as numbers, return whether that month contains a Friday 13th.

function hasFriday13(month, year) {
  month = month - 1;
  const fri = new Date(year, month, 13);
  return fri.getDay() === 5 ? true : false;
}
