// Fullname and Email
// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
// Original
class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
  }
}

// completed
class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `${this.firstname} ${this.lastname}`;
    this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
  }
}
