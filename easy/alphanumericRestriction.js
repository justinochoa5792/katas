// Alphanumeric Restriction
// Create a function that returns true if the given string has any of the following:
// Only letters and no numbers.
// Only numbers and no letters.
// If a string has both numbers and letters, or contains characters which don't fit into any category, return false

function alphanumericRestriction(str) {
  if (str.match(/[\s]/gi) || str.match(/[,@!()]/gi)) {
    return false;
  } else if (str.match(/[a-z]/gi) && !str.match(/[0-9]/gi)) {
    return true;
  } else if (!str.match(/[a-z]/gi) && str.match(/[0-9]/gi)) {
    return true;
  } else {
    return false;
  }
}
