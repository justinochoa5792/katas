// ATM PIN Code Validation
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

function validatePIN(pin) {
  let pins = pin
    .replace(/[a-z`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/gi, "")
    .split("");
  return pins.length === 4 || pins.length === 6 ? true : false;
}
