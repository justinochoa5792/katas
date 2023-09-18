// Find the stray number
// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  let odd = numbers.filter(
    (el) => numbers.indexOf(el) === numbers.lastIndexOf(el)
  );
  return odd[0];
}
