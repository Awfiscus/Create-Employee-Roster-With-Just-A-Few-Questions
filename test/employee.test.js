
const Employee = require("../classes")

test("testing if its an object", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})