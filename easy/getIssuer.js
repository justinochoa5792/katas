// Credit card issuer checking
// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

function getIssuer(number) {
  // Code your solution here
  if (
    number.toString().startsWith(4) &&
    (number.toString().length == 13 || number.toString().length == 16)
  ) {
    return "VISA";
  } else if (number.toString().startsWith(6011)) {
    return "Discover";
  } else if (
    (number.toString().startsWith(34) || number.toString().startsWith(37)) &&
    number.toString().length == 15
  ) {
    return "AMEX";
  } else if (
    (number.toString().startsWith(51) ||
      number.toString().startsWith(52) ||
      number.toString().startsWith(53) ||
      number.toString().startsWith(54) ||
      number.toString().startsWith(55)) &&
    number.toString().length == 16
  ) {
    return "Mastercard";
  } else {
    return "Unknown";
  }
}
