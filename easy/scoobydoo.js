// Barking mad
// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

function Dog(breed) {
  this.breed = breed;
}

const snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
