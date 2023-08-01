// Birthday Cake
// Create a function which constructs a rectangular birthday cake, based on someone's name and age! Build it out of strings in an array and make sure to surround the birthday message with the character that fits the rule:
// If the age is an even number, surround the message with "#".
// If the age is an odd number, surround the message with "*".

function getBirthdayCake(name, age) {
  let message = `${age} Happy Birthday ${name}! ${age}`;
  let length = message.length + 4;
  return age % 2 === 0
    ? [`${"#".repeat(length)}`, `# ${message} #`, `${"#".repeat(length)}`]
    : [`${"*".repeat(length)}`, `* ${message} *`, `${"*".repeat(length)}`];
}
