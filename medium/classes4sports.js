// Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:
// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"

class Player {
  constructor(name, age, height, weight) {
    // complete function
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge(name, age) {
    // complete function
    return `${this.name} is age ${this.age}`;
  }

  getHeight(name, height) {
    // complete function
    return `${this.name} is ${this.height}cm`;
  }

  getWeight(name, weight) {
    // complete function
    return `${this.name} weighs ${this.weight}kg`;
  }
}
