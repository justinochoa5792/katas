// Simple Fun #16: Apple Boxes
// There're k square apple boxes full of apples. If a box is of size m, then it contains m × m apples. You noticed two interesting properties about the boxes:
// Your task is to calculate the difference between the number of red apples and the number of yellow apples.

function appleBoxes(k) {
  //coding and coding..
  let yellow = 0;
  let red = 0;

  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) {
      red += i * i;
    } else {
      yellow += i * i;
    }
  }

  return red - yellow;
}
