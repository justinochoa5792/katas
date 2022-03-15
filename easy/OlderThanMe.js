// Older Than Me
// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // Write code here!
    return this.age > other.age
      ? `${other.name} is younger than me.`
      : this.age === other.age
      ? `${other.name} is the same age as me.`
      : `${other.name} is older than me.`;
  }
}
