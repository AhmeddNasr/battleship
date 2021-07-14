const battleshipGridGenerator = require("../battleshipGridGenerator").battleshipGridGenerator;

function countShipParts(grid) {
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let y = 0; y < grid.length; y++) {
            if (grid[i][y] === 1) {
                counter++;
            }
        }
    }
    return counter;
}

test("correct number of ships :)", () => {
    expect(countShipParts(battleshipGridGenerator())).toBe(19);
});
