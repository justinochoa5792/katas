// Edabit Experience Points
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

function getXP(obj) {
  var totalScore = 0;

  totalScore += 5 * obj["Very Easy"];
  totalScore += 10 * obj["Easy"];
  totalScore += 20 * obj["Medium"];
  totalScore += 40 * obj["Hard"];
  totalScore += 80 * obj["Very Hard"];

  return totalScore + "XP";
}
