const shipGenerator = require("./shipGenerator").shipGenerator;
const insertShip = require("./insertShip").insertShip;

function battleshipGridGenerator() {
    let grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let tempGrid;
    let ships = shipGenerator();
    for (let i = 0; i < ships.length; i++) {
        let x = randomNumberGenerator(grid.length - 1);
        let y = randomNumberGenerator(grid.length);
        tempGrid = insertShip(grid, ships[i], [x, y]);
        if (!tempGrid) {
            i--;
            tempGrid = grid;
        } else {
            grid = tempGrid;
        }
    }
    return grid;
}

function randomNumberGenerator(max) {
    return Math.floor(Math.random() * max);
}

exports.battleshipGridGenerator = battleshipGridGenerator;
