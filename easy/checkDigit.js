// check digit
//In this Kata, you will be given a number, two indexes (index1 and index2) and a digit to look for. Your task will be to check if the digit exists in the number, within the indexes given.

function checkDigit(number, index1, index2, digit) {
  // good luck
  let str = number.toString();

  const start = Math.min(index1, index2);
  const end = Math.max(index1, index2);

  const section = str.slice(start, end + 1);

  return section.includes(digit.toString());
}
