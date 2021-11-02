// Secret Function 2.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

function secret(text) {
  let number = text.split("*");
  let input = `<${number[0]}></${number[0]}>`;
  return input.repeat(number[1]);
}
