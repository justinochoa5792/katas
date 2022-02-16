// Filter a String
// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

function filterString(txt) {
  const capital = /[A-Z]/g;
  const lowercase = /[a-z]/g;
  const nums = /[0-9]/g;
  const Char = /[$&+,:;=?[\]@#|{}'<>.^*()%!-/]/g;

  let caps = txt.match(capital).length;
  let lower = txt.match(lowercase).length;
  let numb = txt.match(nums).length;
  let characters = txt.match(Char).length;
  return [caps, lower, numb, characters];
}
