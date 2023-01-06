// Is the Phone Number Formatted Correctly?
// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

function isValidPhoneNumber(str) {
  const regex = new RegExp(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/);
  return regex.test(str);
}
