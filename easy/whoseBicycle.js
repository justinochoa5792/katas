// Whose bicycle?
// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

function whoseBicycle(diary1, diary2, diary3) {
  // good luck
  let one = Object.values(diary1).reduce((a, b) => a + b);
  let two = Object.values(diary2).reduce((a, b) => a + b);
  let three = Object.values(diary3).reduce((a, b) => a + b);
  if (one > two && one > three) {
    return "I need to buy a bicycle for my first son.";
  } else if (two > one && two > three) {
    return "I need to buy a bicycle for my second son.";
  } else {
    return "I need to buy a bicycle for my third son.";
  }
}
