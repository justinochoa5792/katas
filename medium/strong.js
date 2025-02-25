// Strong Number (Special Numbers Series #2)
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
// Here is the coding challenge and here is my code, one test is is failing but I am confused because the number is the same
// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

function strong(n) {
  let num = n
    .toString()
    .split("")
    .map((el) => Number(el));
  let fact = num
    .map((el) => {
      let res = 1;
      for (let i = 2; i <= el; i++) res *= i;
      return res;
    })
    .reduce((a, b) => a + b, 0);

  return fact == n ? "STRONG!!!!" : "Not Strong !!";
}
