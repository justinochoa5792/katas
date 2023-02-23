// Days in a Month
// Create a function that takes the month and year (as integers) and returns the number of days in that month.

function days(month, year) {
  return new Date(year, month, 0).getDate();
}
