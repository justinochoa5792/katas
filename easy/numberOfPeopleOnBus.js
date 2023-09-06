// Number of People in the Bus
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

var number = function (busStops) {
  // Good Luck!
  return busStops.map((el) => el[0] - el[1]).reduce((a, b) => a + b);
};
