// Help the Fruit Guy
// Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

function removeRotten(bagOfFruits) {
  // ...
  return bagOfFruits == null
    ? []
    : bagOfFruits.map((el) => el.toLowerCase().split("rotten").join(""));
}
