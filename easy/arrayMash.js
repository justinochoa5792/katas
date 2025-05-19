//Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

function arrayMash(array1, array2) {
  let total = [];
  for (let i = 0; i < array1.length; i++) {
    total.push(array1[i], array2[i]);
  }
  return total;
}
