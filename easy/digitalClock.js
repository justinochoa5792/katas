// Time Conversion
// Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.

function digitalClock(seconds) {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
}
