// Training JS #12: loop statement --for..in and for..of
// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

function giveMeFive(obj) {
  //coding here
  let arr = [];
  for (var key in obj) {
    if (key.length == 5) {
      arr.push(key);
    }
    if (obj[key].length == 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
