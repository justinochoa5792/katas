// You FAILEDPASSED the Exam
// The challenge is to fix all of the bugs in this incredibly messy code, which the code in the image might've actually looked like (probably not)! The code given will output the same middle two lines as in the image shown above.
// First parameter is the user's score.
// Second parameter is the required score.

// Buggy Code
function gradePercentage(userScore, passScore) {
  let s = "You ";
  userScore = parseInt(userScore.substring(0, userScore.length - 1));
  passScore = parseInt(passScore.substring(0, passScore.length - 1));
  if (youScore <= passScore) s = s + "FAILED";
  if (userScore >= passScore) s = s + "PASSED";
  return "You" + " " + s + " " + "the Exam";
}

// Fixed
function gradePercentage(userScore, passScore) {
  let result;
  userScore = parseInt(userScore.substring(0, userScore.length - 1));
  passScore = parseInt(passScore.substring(0, passScore.length - 1));

  if (userScore <= passScore) {
    result = "FAILED";
  }
  if (userScore >= passScore) {
    result = "PASSED";
  }
  return `You ${result} the Exam`;
}
