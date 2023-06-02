// Mumbling Challenge
// Create a function that takes a string str and modifies the given string as per the below examples:

function mumbling(str) {
  return str
    .toLowerCase()
    .split("")
    .map((item, i) => {
      return item.toUpperCase() + item.repeat(i);
    })
    .join("-");
}
