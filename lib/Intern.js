const Employee = require("./Employee"); //require employee for same class

//subclass of employee same as mager
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); //get name, id and email
    this.school = this.school; //added the school to the class
  }
  getschool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
//export the file to Intern.test.js
module.exports = Intern;
