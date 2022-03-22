const two = require('./two.js');

it('two returns true', () => {
    expect(two({ item: 'two' })).toEqual(true);
});
