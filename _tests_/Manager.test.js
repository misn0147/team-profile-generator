const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Amy', 32, 'amy@yahoo.com', 1)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});