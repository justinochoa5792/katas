// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

function validatePIN(pin) {
  //return true or false
  let regex = /^([0-9]{4}|[0-9]{6})$/;
  return regex.test(pin);
}
