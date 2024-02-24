// String cleaning
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
  // Function will return the cleaned string
  let regex = /[\d]/g;
  return s.replace(regex, "");
}
