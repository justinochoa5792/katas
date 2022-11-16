// Number of Apples Left
// A man has n number of apples. If he eats a percentage p of the apples (if apples are available), his children will share the remainder of the apples. Create a function to determine the number of whole apples his children got. If his children did not get any apples, return "The children didn't get any apples".

function getNumberOfApples(n, p) {
  let per = (parseInt(p) / 100) * n;
  return Math.trunc(n - per) !== 0
    ? Math.trunc(n - per)
    : "The children didn't get any apples";
}
