// Be Concise I - The Ternary Operator
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// TODO: Refactor and shorten the function
const describeAge = (age) => {
  return age <= 12
    ? "You're a(n) kid"
    : age <= 17
    ? "You're a(n) teenager"
    : age <= 64
    ? "You're a(n) adult"
    : "You're a(n) elderly";
};
