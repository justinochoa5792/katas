// Move Zeros
// Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.

function move_zeros(arrNum, isRight = true) {
  //Your Code logic should written here
  let zeros = arrNum.filter((el) => el == 0);
  let nums = arrNum.filter((el) => el !== 0);
  return isRight ? nums.concat(zeros) : zeros.concat(nums);
}
