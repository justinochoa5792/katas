// Add Length
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

function addLength(str) {
  //start-here
  return str.split(" ").map((el) => `${el} ${el.length}`);
}
