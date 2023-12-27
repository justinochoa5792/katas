// Do I get a bonus?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
  // your code here
  let icon = "\u00A3";
  return bonus === true ? `${icon}${salary * 10}` : `${icon}${salary}`;
}
