// Monkey Tennis - The Aftermath
// Your job is to gather up just the tennis balls and return them in a sack. The sack will be represented by an object that has a 'weight' property, the value of which should be equal to the combined weight of all tennis balls in the array. If the array contains no tennis balls, then the weight value of the returned sack object should be 0.

function ballCollector(detritus) {
  let total = detritus.filter((el) => el == 58).reduce((a, b) => a + b, 0);
  return { "weight": total };
}
