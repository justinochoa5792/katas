// Beginner Series #2 Clock
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  //#Happy Coding! ^_^
  return Math.floor((h * 60 * 60 + m * 60 + s) * 1000);
}
