// Evil or Odious
// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

function evil(n) {
  let num = n.toString(2);
  return num.split("").filter((el) => el === "1").length % 2 !== 0
    ? "It's Odious!"
    : "It's Evil!";
}
