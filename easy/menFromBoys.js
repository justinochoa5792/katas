// Sort Out The Men From Boys
// Now that the competition gets tough it will Sort out the men from the boys .
// Men are the Even numbers and Boys are the odd

function menFromBoys(arr) {
  //your code here
  let men = arr.filter((el) => el % 2 == 0).sort((a, b) => a - b);
  let boys = arr.filter((el) => el % 2 !== 0).sort((a, b) => b - a);
  let total = [];
  total.push(men);
  total.push(boys);

  return [...new Set(total.flat())];
}
