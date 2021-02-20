const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super(name);
    this.github = github;
  }

  //method to get users github
  getGithub() {
    return this.github;
  }

  //will need to overide to produce engineer instead of employee
  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;
