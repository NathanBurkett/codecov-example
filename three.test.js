const three = require('./three.js');

it('three returns true', () => {
    expect(three({ item: 'three' })).toEqual(true);
});

