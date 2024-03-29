// Leap Years
// A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:
// A year must either be divisible by 400 or divisible by 4 and not 100.
// Given a year you must implement a function that returns true if it's a leap year, or false if it's not

function isLeap(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? true
    : false;
}
