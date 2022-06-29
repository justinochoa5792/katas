// Is it True?
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

function isTrue(relation) {
  return eval(relation.replace("=", "==="));
}
