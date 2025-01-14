// ASCII letters from Number
// You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.

function convert(number) {
  // ...Convert integers given as string into ASCII uppercase letters...
  const result = [];
  for (let i = 0; i < number.length; i += 2) {
    result.push(number.slice(i, i + 2));
  }
  return result.map((el) => String.fromCharCode(Number(el))).join("");
}
