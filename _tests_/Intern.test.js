const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Amy', 32, 'amy@yahoo.com', 'UT Austin')

    expect(intern.school).toEqual(expect.any(String));
});