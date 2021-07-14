const insertShip = require("../insertShip").insertShip;

test("horizontal ship checks out of bounds", () => {
    let grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let ship = {
        direction: "h",
        length: 3,
    };

    expect(insertShip(grid, ship, [1, 0])).toBe(false);
});

test("what the fuck", () => {
    let grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    let ship = { direction: 'h', length: 5 };

    expect(insertShip(grid, ship, [0,0])).toEqual([
        [1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ]);
});

test("horizontal ship checks if another ship exists", () => {
    let grid = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
    ];
    let ship = {
        direction: "h",
        length: 3,
    };

    expect(insertShip(grid, ship, [0, 1])).toBe(false);
});

test("horizontal ship [placement with no side or upper space but with lower space", () => {
    let grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let ship = {
        direction: "h",
        length: 3,
    };
    expect(insertShip(grid, ship, [0, 0])).toEqual([
        [1, 1, 1],
        [2, 2, 2],
        [0, 0, 0],
    ]);
});

test("horizontal ship [middle placement of ship]", () => {
    let grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    let ship = {
        direction: "h",
        length: 3,
    };
    expect(insertShip(grid, ship, [1, 2])).toEqual([
        [0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2],
        [2, 1, 1, 1, 2],
        [2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0],
    ]);
});

test("horizontal ship: middle placement to the side", () => {
    let grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    let ship = {
        direction: "h",
        length: 3,
    };
    expect(insertShip(grid, ship, [2, 2])).toEqual([
        [0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2],
        [0, 2, 1, 1, 1],
        [0, 2, 2, 2, 2],
        [0, 0, 0, 0, 0],
    ]);
});

test("horizontal ship close to another ship", () => {
    let grid = [
        [1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    let ship = {
        direction: "h",
        length: 3,
    };
    expect(insertShip(grid, ship, [2, 2])).toEqual([
        [1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2],
        [0, 2, 1, 1, 1],
        [0, 2, 2, 2, 2],
        [0, 0, 0, 0, 0],
    ]);
});

//TODO
test.skip("vertical ship is inserted correctly", () => {
    let grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let ship = {
        direction: "v",
        length: 3,
    };
    expect(insertShip(grid, ship, [0, 0])).toEqual([
        [1, 2, 0],
        [1, 2, 0],
        [1, 2, 0],
    ]);
});
