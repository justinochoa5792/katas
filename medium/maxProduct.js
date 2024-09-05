// Product Of Maximums Of Array (Array Series #2)
// Given an array/list [] of integers , Find the product of the k maximal numbers.

function maxProduct(numbers, size) {
  //your code here
  let sorted = numbers.sort((a, b) => b - a);
  const chunks = [];

  for (let i = 0; i < sorted.length; i += 2) {
    const chunk = sorted.slice(i, size);
    chunks.push(chunk);
  }
  return chunks[0].reduce((a, b) => a * b);
}
