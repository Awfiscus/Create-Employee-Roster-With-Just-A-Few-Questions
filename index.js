const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generateHTML = require("./generateHTML");

const roster = [];

const confirmNumber = async (input) => {
  if (!input) {
    return "That is not a number";
  }
  return true;
};

const choices = (input) => {
  if (input === "Intern") {
    inquirer.prompt([...promptIntern]).then((response) => {
      roster.push(response);
      if (response.continue === "I'm All Done") {
        writeToFile(roster);
      } else {
        choices(response.continue);
      }
    });
  } else if (input === "Engineer") {
    inquirer.prompt([...promptEngineer]).then((response) => {
      roster.push(response);
      if (response.continue === "I'm All Done") {
        writeToFile(roster);
      } else {
        choices(response.continue);
      }
    });
  }
};

const promptManager = [
  {
    type: "input",
    message: "What is the Manager's name?",
    name: "name",
  },

  {
    type: "number",
    message: "What is the Manager's id?",
    name: "id",
    validate: confirmNumber,
  },

  {
    type: "email",
    message: "What is the Manager's Email?",
    name: "email",
  },

  {
    type: "number",
    message: "What is the Manager's office number?",
    name: "random",
    validate: confirmNumber,
  },

  {
    type: "list",
    message: "Include another team member?",
    choices: ["Intern", "Engineer", "I'm All Done"],
    name: "continue",
  },
];

const promptIntern = [
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "name",
  },

  {
    type: "number",
    message: "What is the Intern's id?",
    name: "id",
  },

  {
    type: "email",
    message: "What is the Intern's Email?",
    name: "email",
  },

  {
    type: "input",
    message: "What is the Intern's School?",
    name: "random",
  },

  {
    type: "list",
    message: "Include another team member?",
    choices: ["Intern", "Engineer", "I'm All Done"],
    name: "continue",
  },
];
const promptEngineer = [
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "name",
  },

  {
    type: "number",
    message: "What is the Engineer's id?",
    name: "id",
  },

  {
    type: "email",
    message: "What is the Engineer's Email?",
    name: "email",
  },

  {
    type: "number",
    message: "What is the Engineer's github username?",
    name: "random",
  },

  {
    type: "list",
    message: "Include another team member?",
    choices: ["Intern", "Engineer", "I'm All Done"],
    name: "continue",
  },
];

//create a function that kicks off process
//create a function that writesFile into an html file
//function to write file into html

function init() {
  inquirer.prompt([...promptManager]).then((response) => {
    roster.push(response);
    if (response.continue === "I'm All Done") {
      writeToFile(roster);
    } else {
      choices(response.continue);
    }
  });
}

function writeToFile() {
  //generateHTML.generateCards(roster);
  fs.writeFile("roster.html", generateHTML.generateHTMLPage(roster), (err) => {
    err ? console.error(err) : console.log("Successfully Made!");
  });
}

init();
