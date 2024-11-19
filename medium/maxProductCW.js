// Product of Largest Pair
// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.

function maxProduct(a) {
  // ...
  // Initialize two variables to store the largest and second largest values
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let num of a) {
    if (num > max1) {
      // Update second largest before updating the largest
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  // Return the product of the two largest numbers
  return max1 * max2;
}
