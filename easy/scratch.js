// Simple Fun #320: Scratch lottery I
// Each set of characters contains three animal names and a number, like this: "tiger tiger tiger 100". If the three animal names are the same, Congratulations, you won the prize. You will win the same bonus as the last number.

function scratch(lottery) {
  //coding and coding..
  let parts = lottery
    .map((el) => el.split(" "))
    .map((el) => (el[0] == el[1] && el[1] == el[2] ? el[3] : ""));
  return parts
    .filter((el) => el !== "")
    .reduce((a, b) => Number(a) + Number(b), 0);
}
