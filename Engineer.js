const Employee = require("./Employee")


class Engineer extends Employee {
    constructor(github){
        this.github = github

        super(name, id, email)
    }

    //method to get users github
    getGithub() {
        return this.github
    }

    //will need to overide to produce engineer instead of employee
    getRole() {
        return `Engineer`
    }
}

module.export = Engineer;