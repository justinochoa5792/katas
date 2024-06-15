// Milk and Cookies for Santa
// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

function timeForMilkAndCookies(date) {
  //TODO
  let month = date.getMonth();
  let day = date.getDate();
  return month === 11 && day === 24 ? true : false;
}
