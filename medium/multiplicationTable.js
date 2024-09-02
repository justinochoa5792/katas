// Multiplication table
// Your task, is to create N×N multiplication table, of size provided in parameter.

multiplicationTable = function (size) {
  // insert code here
  let bigArr = [];
  for (let i = 1; i <= size; i++) {
    let arr = [];
    for (let j = 1; j <= size; j++) {
      arr.push(i * j);
    }
    bigArr.push(arr);
  }
  return bigArr;
};
