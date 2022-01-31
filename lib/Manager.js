const Employee = require("./Employee"); //require employee for same class

//subclass of employee same as mager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); //get name, id and email
    this.officeNumber = officeNumber; //added the office number
  }
  getOfficeNumber() {
    return this.OfficeNumber;
  }
  getRole() {
    return "Manager";
  }
}
//export the file to manger.test.js
module.exports = Manager;
