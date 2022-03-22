// Fix the Error / Comparing Arrays (Part #2)
// Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.
// To solve this question, your friend initially wrote the following code (see this challenge):

// Fix this code
// Original
function checkEquals(arr1, arr2) {
  if (arr1.join("") === arr2.join("")) {
    return true;
  } else {
    return false;
  }
}

// Fixed Code
function checkEquals(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
}
