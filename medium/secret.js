// Secret Function 4.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

function secret(text) {
  let split = text.split(".");
  let first = split.shift();
  return `<${first} class="${split.map((el) => el).join(" ")}"></${first}>`;
}
