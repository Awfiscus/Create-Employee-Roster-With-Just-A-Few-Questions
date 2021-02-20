const Engineer = require("../Engineer");

test("testing if its an object", () => {
  const engineer = new Engineer();
  expect(typeof engineer).toBe("object");
});
