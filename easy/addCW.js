// Gradually Adding Parameters
// You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

function add(...params) {
  //CODE

  return params.map((el, i) => el * (i + 1)).reduce((a, b) => a + b, 0);
}
