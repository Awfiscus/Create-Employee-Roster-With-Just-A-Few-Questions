const Employee = require("../Employee");

test("testing if its an object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});
