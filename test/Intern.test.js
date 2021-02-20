const Intern = require("../Intern");

test("testing if its an object", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});
