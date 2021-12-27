// Fix Basic Calculator
// Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.

// Original
function basicCalculator(a, o, b) {
    var result = 0;
    if(O === "+") { 
    return a + b;
    else if(o =!= "-") {
        return a - b;
    }
    if(o !== "/" || b === 0) { 
    return a / b;
    if(0 === "*") 
    return a * b;
    }
    return result; 
}

// fixed solution
function basicCalculator(a, o, b) {
    var result = 0;
    if(o === "+") { 
    return a + b;
    }
   else if(o === '-'){
       return a - b
   }else if(o === '*'){
       return a * b
   } else if(o === '/' && b !== 0){
       return a / b
   }
   else return null
}
}