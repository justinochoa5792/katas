// Coding Website Score Calculator
// Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.

function scoreCalculator(easy, med, hard) {
  if (easy >= 0 && med >= 0 && hard >= 0) {
    return easy * 5 + med * 10 + hard * 20;
  } else {
    return "invalid";
  }
}
