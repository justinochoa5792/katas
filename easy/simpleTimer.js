// A Simple Timer
// Create a function that takes the number of seconds and returns the timer in "00:00:00" format.

function simpleTimer(seconds) {
  const format = (val) => `0${Math.floor(val)}`.slice(-2);
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;

  return [hours, minutes, seconds % 60].map(format).join(":");
}
