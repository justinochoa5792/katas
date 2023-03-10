// Scoring System
// For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.

function calculateScores(str) {
  return [
    [...str].filter((e) => e === "A").length,
    [...str].filter((e) => e === "B").length,
    [...str].filter((e) => e === "C").length,
  ];
}
