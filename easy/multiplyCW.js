// Multiply the number
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

function multiply(number) {
  //your code here
  let num = Math.abs(number).toString().split("").length;
  return number * Math.pow(5, num);
}
