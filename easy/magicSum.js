// Magic Sum of 3s
// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

function magicSum(numbers) {
  // TODO: Program Me
  return numbers
    .filter((el) => el % 2 !== 0 && el.toString().includes(3))
    .reduce((a, b) => Number(a) + Number(b), 0);
}
