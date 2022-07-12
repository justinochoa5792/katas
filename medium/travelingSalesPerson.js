// Travelling Salesman Problem
// A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.

const paths = (num) => (num === 0 ? 1 : num * paths(num - 1));
