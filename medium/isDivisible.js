// Is n divisible by (...)?
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(...props) {
  //Write your code here
  let first = props.slice(0, 1);
  return props.map((el) => first % el == 0).includes(false) ? false : true;
}
