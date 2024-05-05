// Find the Capitals
// The method should return an array of sentences declaring the state or country and its capital.

function capital(capitals) {
  //...
  return capitals.map(
    (el) =>
      `The capital of ${el.state ? el.state : el.country} is ${el.capital}`
  );
}
