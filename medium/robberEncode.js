//The Robber Language
// Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

function robberEncode(sentence) {
  // yoyouror cocodode hoherore
  return sentence
    .split("")
    .map((el) => {
      if (el.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
        const isUpper = el === el.toUpperCase();
        const o = isUpper ? "O" : "o";
        return el + o + el;
      }
      return el;
    })
    .join("");
}
