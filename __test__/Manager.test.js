// const Engineer = require('../lib/Engineer.js'); //inquiring the engineer.js file
const Manager = require("../lib/Manager");

//need github username constructor for engineer
describe("Manager", () => {
  test("set the name", () => {
    var manager = new Manager("Kemi", 8, "kemi@gmail.com", "48498683958");
    expect(manager.getName()).toBe("Kemi");
  });
  test("set the id with constructor ", () => {
    var manager = new Manager("Kemi", 8, "kemi@gmail.com", "48498683958");
    expect(manager.getId()).toBe(8);
  });
  test("set email with constructor", () => {
    var manager = new Manager("Kemi", 8, "kemi@gmail.com", "48498683958");
    expect(manager.getEmail()).toBe("kemi@gmail.com");
  });
  test("set role with constructor", () => {
    var manager = new Manager("Kemi", 8, "kemi@gmail.com", "48498683958");
    expect(manager.getRole()).toBe("Manager");
  });
  test("set OfficeNumber with constructor", () => {
    var manager = new Manager("Kemi", 8, "kemi@gmail.com", "48498683958");
    expect(manager.getOfficeNumber()).toBe("48498683958");
  });
});
