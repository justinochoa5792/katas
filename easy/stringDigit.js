// Regexp Basics - is it a digit?
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function () {
  let regex = /^[0-9]$/gi;
  return regex.test(this);
};
