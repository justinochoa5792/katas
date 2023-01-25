// One Button Messaging Device
// Write a function that takes a string (the message) and returns the total number of times the button is pressed.

function howManyTimes(msg) {
  return msg
    .split("")
    .map((el, i) => el.charCodeAt(0) - 96)
    .reduce((a, b) => a + b);
}
