// Stalactites or Stalagmites?
// Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.
// Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.

function mineralFormation(cave) {
  if (cave[cave.length - 1].includes(1) && !cave[0].includes(1)) {
    return "stalagmites";
  } else if (cave[0].includes(1) && !cave[cave.length - 1].includes(1)) {
    return "stalactites";
  } else {
    return "both";
  }
}
