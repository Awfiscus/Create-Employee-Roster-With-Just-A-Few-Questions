const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super(name);
    this.school = school;
  }

  //method to get school info
  getSchool() {
    return this.school;
  }

  //method to overide employee with intern
  getRole() {
    return `Intern`;
  }
}

module.exports = Intern;
