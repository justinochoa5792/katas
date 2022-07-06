// Fix the Error: Value vs. Reference Types
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// Fix this broken code!
function checkEquals(arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
}

// Fixed
function checkEquals(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    return true;
  } else {
    return false;
  }
}
