// Simple Fun #238: Tennis Game Points
// Given the current score, your goal is to find the number of points won in the current game.

function tennisGamePoints(score) {
  //coding and coding..
  let chars = { "love": "0", "15": "1", "30": "2", "40": "3" };
  return score.includes("all")
    ? Number(chars[score.split("-")[0]]) * 2
    : score
        .replace(/\b(15|30|40|love)\b/g, (m) => chars[m])
        .split("-")
        .reduce((a, b) => Number(a) + Number(b));
}
