// Money Formatting
// Given a number, return a string which is formatted into US Dollars and cents!
// Remember that:
// You should round to two digits after the decimal point (even for integers).
// Thousandths should be separated by commas.

function dollaDollaBills(money) {
  let formatted = Number(money.toFixed(2)).toLocaleString();
  if (formatted.split(".").length < 2) {
    return `$${formatted}.00`;
  } else if (formatted.includes("-")) {
    return `${formatted.replace("-", "-$")}`;
  } else {
    return `$${formatted}`;
  }
}
