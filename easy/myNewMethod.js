// Re-open class
// To demonstrate this, you'll have to add a new method (called my_new_method in Ruby or myNewMethod in JS / Coffeescript) into the String class that simply calls the upcase method (toUpperCase() in JS / Coffeescript), so that:

//Re-open the class String and add the "myNewMethod" method.
String.prototype.myNewMethod = function () {
  return this.toUpperCase();
};
