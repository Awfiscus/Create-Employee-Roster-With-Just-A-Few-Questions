const Employee = require("./Employee")

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber

        super(name, id, email)
    }

    //method to get office number
    getofficeNumber() {
        return this.officeNumber
    }
    
    //will need to overide to produce manager instead of employee
    getRole() {
        return `Manager`
    }

}

module.exports = Manager;