// Training JS #32: methods of Math---round() ceil() and floor()
// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

function roundIt(n) {
  //coding here...
  let split = n.toString().split(".");
  if (split[0].length > split[1].length) {
    return Math.floor(n);
  } else if (split[0].length < split[1].length) {
    return Math.ceil(n);
  } else {
    return Math.round(n);
  }
}
