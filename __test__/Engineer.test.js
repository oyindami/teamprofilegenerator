const Engineer = require("../lib/Engineer.js"); //inquiring the engineer.js file

//need github username constructor for engineer
describe("Engineer", () => {
  test("set the name", () => {
    var engineer = new Engineer("Lisa", 7, "lisa@gmail.com", "lala022");
    expect(engineer.getName()).toBe("Lisa");
  });
  test("set the id with constructor ", () => {
    var engineer = new Engineer("Lisa", 7, "lisa@gmail.com", "lala022");
    expect(engineer.getId()).toBe(7);
  });
  test("set email with constructor", () => {
    var engineer = new Engineer("Lisa", 7, "lisa@gmail.com", "lala022");
    expect(engineer.getEmail()).toBe("lisa@gmail.com");
  });
  test("set role with constructor", () => {
    var engineer = new Engineer("Lisa", 7, "lisa@gmail.com", "lala022");
    expect(engineer.getRole()).toBe("Engineer");
  });
  test("set GitHubUsername with constructor", () => {
    var engineer = new Engineer("Lisa", 8, "lisa@gmail.com", "lala022");
    expect(engineer.getGitHubUsername()).toBe("lala022");
  });
});
