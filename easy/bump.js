// Bumps in the Road
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

function bump(x) {
  return x.split("").filter((el) => el === "n").length <= 15
    ? "Woohoo!"
    : "Car Dead";
}
