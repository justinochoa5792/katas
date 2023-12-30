// Correct the mistakes of the character recognition software
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

function correct(string) {
  // your code here
  return string
    .split("")
    .map((el) => el.replace(0, "O").replace(5, "S").replace(1, "I"))
    .join("");
}
