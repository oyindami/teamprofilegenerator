const Employee = require("../lib/Employee"); //inquiring the employee.js file

describe("Employee", () => {
  test("set the name", () => {
    var employee = new Employee("Lisa", 8, "lisa@gmail.com");
    expect(employee.getName()).toBe("Lisa");
  });
  test("set the id with constructor ", () => {
    var employee = new Employee("Lisa", 8, "lisa@gmail.com");
    expect(employee.getId()).toBe(8);
  });
  test("set email with constructor", () => {
    var employee = new Employee("Lisa", 8, "lisa@gmail.com");
    expect(employee.getEmail()).toBe("lisa@gmail.com");
  });
  test("set role with constructor", () => {
    var employee = new Employee("Lisa", 8, "lisa@gmail.com");
    expect(employee.getRole()).toBe("Employee");
  });
});
