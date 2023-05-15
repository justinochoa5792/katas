// ASCII Charts (Part 1: Progress Bar)
// Given a character and a value between 0 and 100, return a string that represents a simple progress bar.
// The value represents a percentage.
// The bar should begin and end with "|"
// Repeat the character to fill the bar, with each character equivalent to 10%
// Use spaces to pad the bar to a length of 10 characters.
// A single space comes after the bar, then a message with the % of completion (e.g. "Progress: 60%")
// If the value is 100, the message should be "Completed!".

function progressBar(bar, progress) {
  let total = progress / 10;
  if (progress === 100) {
    return `|${bar.repeat(total)}| Completed!`;
  } else {
    return `|${bar.repeat(total).padEnd(10)}| Progress: ${progress}%`;
  }
}
