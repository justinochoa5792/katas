// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let numArr = numbers
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  return `${numArr[numArr.length - 1]} ${numArr[0]}`;
}
