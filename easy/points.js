// Total amount of points
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
  return games
    .map((el) =>
      el.split(":")[0] > el.split(":")[1]
        ? 3
        : el.split(":")[0] == el.split(":")[1]
        ? 1
        : 0
    )
    .reduce((a, b) => a + b);
}
