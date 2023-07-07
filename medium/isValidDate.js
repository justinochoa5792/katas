// Impossible Date
// Given the parameters day, month and year, return whether that date is a valid date.

function isValidDate(d, m, y) {
  if (d > 31 || m > 12) {
    return false;
  } else if ((m === 6 && d > 30) || (m === 2 && d > 28 && y !== 2020)) {
    return false;
  } else {
    return true;
  }
}
