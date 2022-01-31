const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("//file for engineer");
const Employee = require("//file for engineer");
const Manager = require("//file for engineer");
const Intern = require("//file for engineer");
const generateHTML = require("./src/generateHTML");

var newPeople = []; //holder for everyone
//prompts request for the classes//
const EngineerPrompts = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "number",
    message: "What is your ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "Email",
  },
  {
    type: "input",
    message: "What is your GitHub?",
    name: "GitHubUsername",
  },
];
const MangerPrompts = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "number",
    message: "What is your ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "Email",
  },
  {
    type: "input",
    message: "What is your Office number?",
    name: "OfficeNumber",
  },
];

const InternPrompts = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "number",
    message: "What is your ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "Email",
  },
  {
    type: "input",
    messsage: "What school did you attend?",
    name: "school",
  },
];

//start the app
const pickAPerson = [
  {
    type: "list",
    name: "add",
    message: "Which type of team member would you like to add? ",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];
// To pick Role
function menu() {
  inquirer.prompt(pickAPerson).then((data) => {
    if (data.add === "Engineer") {
      questions = EngineerPrompts;
      que(questions, "Engineer");
    } else if (data.add === "Intern") {
      questions = InternQues;
      que(questions, "InternPrompts");
    } else {
      console.log("List: ", newPeople);
      htmlMaker(newPeople);
    }
  });
}
//Assigning the function of prompt to it's manger quetions first and the manger enters the desired employee
var questions = MangerPrompts;
que(questions, "Manager");
//Causing the inquire to begin
function que(arrayQue, employeeType) {
  inquirer.prompt(arrayQue).then((data) => {
    if (employeeType === "Manager") {
      var mangInfo = new Manager(
        data.name,
        data.id,
        data.email,
        data.OfficeNumber
      );
      newPeople.push(mangInfo);
    } else if (employeeType === "Engineer") {
      var engInfo = new Engineer(
        data.name,
        data.id,
        data.email,
        data.GitHubUsername
      );
      newPeople.push(engInfo);
    } else {
      var internInfo = new Intern(data.name, data.id, data.email, data.school);
      newPeople.push(internInfo);
    }
    menu();
  });
}
//To generate the HTML file
function htmlMaker(arrayList) {
  fs.writeFile("../dist/index.html", generateHTML(arrayList), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
