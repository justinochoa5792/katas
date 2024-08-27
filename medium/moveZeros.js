// Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let total = [];
  let filtered = arr.filter((el) => el === 0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      total.push(arr[i]);
    }
  }
  return total.concat(filtered);
}
