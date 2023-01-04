//Shhh Be Quiet Function
//Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.

function shhh(sentence) {
  return `"${sentence
    .split("")
    .map((el, i) => (i === 0 ? el.toUpperCase() : el.toLowerCase()))
    .join("")}", whispered Edabit.`;
}
