class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    //use method to get the name of employee and return value to use in html
    getName() {
        return this.name
    }

    //use method to get the id of employee and return value to use in html
    getId() {
        return this.id
    }

    //use method to get the email of employee and return value to use in html
    getEmail() {
        return this.email
    }

    //will return the value of Employee
    getRole() {
        return `Employee`
    }

}



module.exports = Employee;