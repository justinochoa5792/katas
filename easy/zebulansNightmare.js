// Zebulan's Nightmare
// Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.
// Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

function zebulansNightmare(functionName) {
  // don't be like zebulan!
  return functionName
    .split("_")
    .map((el, i) =>
      i == 0 ? el : el.substring(0, 1).toUpperCase().concat(el.slice(1))
    )
    .join("");
}
