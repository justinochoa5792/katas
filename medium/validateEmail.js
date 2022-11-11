// Basic E-Mail Validation
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

function validateEmail(str) {
  let regex = /^\S+@\S+\.\S+$/;
  return regex.test(str);
}
