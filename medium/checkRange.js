// yCheck if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(num, range) {
  if (num >= range.min && num <= range.max) {
    return true;
  } else return false;
}
