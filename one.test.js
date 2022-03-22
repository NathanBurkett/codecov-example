const one = require('./one.js');

it('one returns true', () => {
    expect(one({item: 'one'})).toEqual(true);
});
