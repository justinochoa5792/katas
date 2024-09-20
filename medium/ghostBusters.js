// Ghostbusters (whitespace removal)
// In this kata, strings represent buildings while whitespaces within those strings represent ghosts

function ghostBusters(building) {
  let arr = building.split("");
  return arr.includes(" ")
    ? arr.filter((el) => el !== " ").join("")
    : "You just wanted my autograph didn't you?";
}
