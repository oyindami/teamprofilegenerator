const Employee = require("./Employee"); //require employee for same class

//subclass of employee same as mager
class Engineer extends Employee {
  constructor(name, id, email, GitHubUsername) {
    super(name, id, email); //get name, id and email
    this.GitHubUsername = GitHubUsername; //added the GitHub Username
  }
  getGitHubUsername() {
    return this.GitHubUsername;
  }
  getRole() {
    return "Engineer";
  }
}
//export the file to Engineer.test.js
module.exports = Engineer;
