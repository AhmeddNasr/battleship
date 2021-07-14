const ship = require('../ship').ship;

test("Ship tmam", () => {
    expect(ship('h',4)).toEqual({
        direction: 'h',
        length: 4,
    })
})