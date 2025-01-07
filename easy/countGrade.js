// Training JS #27: methods of arrayObject---filter()
// Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

function countGrade(scores) {
  //coding here...
  let s = scores.filter((el) => el == 100);
  let a = scores.filter((el) => el < 100 && el >= 90);
  let b = scores.filter((el) => el < 90 && el >= 80);
  let c = scores.filter((el) => el < 80 && el >= 60);
  let d = scores.filter((el) => el < 60 && el >= 0);
  let x = scores.filter((el) => el == -1);

  return {
    S: s.length,
    A: a.length,
    B: b.length,
    C: c.length,
    D: d.length,
    X: x.length,
  };
}
