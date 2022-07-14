// Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ") ");
  numbers.splice(8, 0, "-");
  return numbers.join("");
}
