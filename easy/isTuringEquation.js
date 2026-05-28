// Simple Fun #384: Is Turing's Equation?
// You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.
// Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

function isTuringEquation(s) {
  //coding and coding...
  let num1 = s.split("+");
  return (
    Number(num1[0].split("").reverse().join("")) +
      Number(num1[1].split("=")[0].split("").reverse().join("")) ===
    Number(num1[1].split("=")[1].split("").reverse().join(""))
  );
}
