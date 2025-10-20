// Null-Conditional Operator (C# 6.0)
// Complete the method called getNumberOfGears being added to the prototype of the Car class. This method will return the value of the numberOfGears property of the gearbox or null if the gearbox (or anything else) is missing.

Car.prototype.getNumberOfGears = function getNumberOfGears() {
  // code me
  return this.engine?.gearbox?.numberOfGears ?? null;
};
