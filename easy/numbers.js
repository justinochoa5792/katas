//For the sake of argument
//Write a function named numbers.
// function should return True if all parameters are of the Number type.
// The function should accept any number of parameters.
// Example usage:

// Create your numbers function here
function numbers(...arr) {
  return arr.every((el) => typeof el == "number");
}
