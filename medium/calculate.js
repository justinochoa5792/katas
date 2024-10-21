// Debug Basic Calculator
// Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

// original
// var calculate = function calculate(a, o, b) {
//     var result = 0;

//     if(O === "+") {
//       return a + b;
//       else if(o =!= "-") {
//         return a - b;
//       }
//     if(o !== "/" || b === 0) {
//       return a / b;
//     if(0 === "*")
//       return a * b;
//     }

//     return result;
//    }
//fixed
function calculate(a, o, b) {
  if (o === "+") {
    return a + b;
  } else if (o == "/" && b !== 0) {
    return a / b;
  } else if (o == "-") {
    return a - b;
  } else if (o == "*") {
    return a * b;
  } else {
    return null;
  }
}
