// All Star Code Challenge #22
// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
// Any remaining seconds left over are ignored.

function toTime(seconds) {
  //code here
  return `${Math.floor(seconds / 3600)} hour(s) and ${Math.floor(
    (seconds % 3600) / 60
  )} minute(s)`;
}
