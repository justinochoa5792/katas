// How good are you really?
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total = classPoints.reduce((a, b) => a + b, 0) + yourPoints;
  return total / classPoints.length > yourPoints ? false : true;
}
