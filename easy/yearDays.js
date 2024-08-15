// Days in the year
// Write a function which will return the days in the year and the year entered in a string. For example:

function yearDays(year) {
  //your code here
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
    ? `${year} has ${366} days`
    : `${year} has ${365} days`;
}
