class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    //use method to get the name of employee and return value to use in html
    getName() {

    }

    //use method to get the id of employee and return value to use in html
    getId() {

    }

    //use method to get the email of employee and return value to use in html
    getEmail() {

    }

    //will return the value of Employee
    getRole() {

    }

}

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber

        super(name, id, email)
    }

    //method to get office number
    getofficeNumber() {

    }
    
    //will need to overide to produce manager instead of employee
    getRole() {

    }

    
}

class Engineer extends Employee {
    constructor(github){
        this.github = github

        super(name, id, email)
    }

    //method to get users github
    getGithub() {
        
    }

    //will need to overide to produce engineer instead of employee
    getRole() {

    }
}

class Intern extends Employee {
    constructor(school) {
        this.school = school

        super(name, id, email)
    }

    //method to get school info
    getSchool() {

    }

    //method to overide employee with intern
    getRole() {
        
    }
}