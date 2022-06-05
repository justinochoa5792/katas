// Promises IV: The Reject Callback
// Async operations don't always go as planned. When errors creep up we need to know how to handle them. We can pass the reject callback to our executor function to pass errors to our promise.

let promise = new Promise((resolve, reject) => {
  let animal = "cat";
  setTimeout(() => {
    if (animal === "dog") {
      resolve("It's a dog!");
    }
    if (animal !== "dog") {
      reject("It's not a dog!");
      /* need something here, you might also need to pass
			something else besides the resolve callback */
    }
  }, 1000);
});
