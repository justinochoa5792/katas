// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  // build here
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}
