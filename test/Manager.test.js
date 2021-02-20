const Manager = require("../Manager");

test("testing if its an object", () => {
  const manager = new Manager();
  expect(typeof manager).toBe("object");
});
