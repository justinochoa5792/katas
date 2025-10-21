// Paul's Misery
// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

function paul(x) {
  let chars = { "life": 0, "kata": 5, "eating": 1, "Petes kata": 10 };
  let total = x
    .map((el) => el.replace(/(life|kata|eating|Petes kata)/g, (m) => chars[m]))
    .reduce((a, b) => Number(a) + Number(b), 0);
  return total < 40
    ? "Super happy!"
    : total < 70 && total >= 40
    ? "Happy!"
    : total < 100 && total >= 70
    ? "Sad!"
    : "Miserable!";
}
