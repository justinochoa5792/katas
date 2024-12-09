// Hit Count
// As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.

function counterEffect(hitCount) {
  //do your thing
  let split = hitCount.split("");
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];

  for (let i = 0; i <= split[0]; i++) {
    arr1.push(i);
  }

  for (let i = 0; i <= split[1]; i++) {
    arr2.push(i);
  }

  for (let i = 0; i <= split[2]; i++) {
    arr3.push(i);
  }

  for (let i = 0; i <= split[3]; i++) {
    arr4.push(i);
  }

  return [arr1, arr2, arr3, arr4];
}
