// Binary Zoo
// Write a function that can help the zookeper convert the binary count.
// Input will be an object where key:value-pairs will represent an animal and a binary number.
// Output should be an integer that equals the sum of all the animals in the zoo.

function countTheAnimals(animals) {
  //happy coding!
  return Object.values(animals)
    .map((el) => parseInt(el, 2))
    .reduce((a, b) => a + b, 0);
}
