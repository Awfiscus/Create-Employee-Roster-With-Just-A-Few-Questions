const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  //method to get office number
  getofficeNumber() {
    return this.officeNumber;
  }

  //will need to overide to produce manager instead of employee
  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
