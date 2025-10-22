// Lazily executing a function
// Write a method make_lazy that takes in a function (symbol for Ruby) and the arguments to the function and returns another function (lambda for Ruby) which when invoked, returns the result of the original function invoked with the supplied arguments.

function makeLazy(func, ...args) {
  return function () {
    return func(...args);
  };
}
