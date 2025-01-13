// Even and Odd !
// Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

function evenAndOdd(num) {
  // your code here
  let even = num
    .toString()
    .split("")
    .filter((el) => el % 2 == 0)
    .join("");
  let odd = num
    .toString()
    .split("")
    .filter((el) => el % 2 !== 0)
    .join("");
  return [Number(even), Number(odd)];
}
