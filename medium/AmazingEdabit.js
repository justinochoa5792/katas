// Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.
function amazingEdabit(str) {
  if (str.includes("edabit")) {
    return str;
  } else return str.replace("amazing", "not amazing");
}
