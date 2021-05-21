const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Amy');

    expect(employee.name).toBe('Amy');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});