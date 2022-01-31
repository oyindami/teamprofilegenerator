const Intern = require("./lib/Intern.js"); //inquiring the engineer.js file

//need github username constructor for engineer
describe("Intern", () => {
  test("set the name", () => {
    var intern = new Intern("Abby", 8, "abby@gmail.com", "HSU");
    expect(intern.getName()).toBe("Abby");
  });
  test("set the id with constructor ", () => {
    var intern = new Intern("Abby", 8, "abby@gmail.com", "HSU");
    expect(intern.getId()).toBe(8);
  });
  test("set email with constructor", () => {
    var intern = new Intern("Abby", 8, "abby@gmail.com", "HSU");
    expect(intern.getEmail()).toBe("abby@gmail.com");
  });
  test("set role with constructor", () => {
    var intern = new Intern("Abby", 8, "abby@gmail.com", "HSU");
    expect(intern.getRole()).toBe("Intern");
  });
  test("set school with constructor", () => {
    var intern = new Intern("Abby", 8, "abby@gmail.com", "HSU");
    expect(intern.getschool()).toBe("HSU");
  });
});
