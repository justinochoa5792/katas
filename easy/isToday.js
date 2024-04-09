// Is the date today
// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

function isToday(date) {
  //Code goes here.
  let d = new Date();
  return date.toISOString().slice(0, 10) === d.toISOString().slice(0, 10);
}
