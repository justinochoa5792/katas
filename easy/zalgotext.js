// Zalgo text reader
// Complete the function that converts a string of Zalgo text into a string interpretable by our mortal eyes. For example, the string above would be converted into:

function readZalgo(zalgotext) {
  return zalgotext.match(/[A-Za-z0-9 .,!?]/g).join("");
}
