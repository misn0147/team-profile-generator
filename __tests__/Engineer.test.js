const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Amy', 32, 'amy@yahoo.com', 'Amygit')

    expect(engineer.github).toEqual(expect.any(String));
});