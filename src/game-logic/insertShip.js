//location is [x,y]
//but grid is setup as [y][x]
function insertShip(grid, ship, location) {
    let gridLength = grid.length;
    let x = location[0];
    let y = location[1];
    //horizontal ship
    if (ship.direction === "h") {
        //check out of bounds
        if (x + ship.length > gridLength) {
            return false;
        }

        //check if another ship exists
        for (let i = x; i < x + ship.length; i++) {
            if (grid[y][i] !== 0) {
                return false;
            }
        }

        for (let i = x; i < x + ship.length; i++) {
            //insert ship represented by 1 in grid array
            grid[y][i] = 1;
            //fill row above and below with 2 if possible to avoid ships touching
            if (y + 1 < gridLength) {
                grid[y + 1][i] = 2;
            }
            if (y - 1 >= 0) {
                grid[y - 1][i] = 2;
            }
        }

        //fill 2 adjacent vertical bars
        //left adjacent vertical bar
        if (x !== 0) {
            grid[y][x - 1] = 2;
            if (y !== 0) {
                grid[y - 1][x - 1] = 2;
            }
            if (y !== gridLength-1) {
                grid[y + 1][x - 1] = 2;
            }
        }
        //right adjacent vertical bar
        if (x + ship.length !== gridLength) {
            grid[y][x + ship.length] = 2;
            if (y !== 0) {
                grid[y - 1][x + ship.length] = 2;
            }
            if (y !== gridLength-1) {
                grid[y + 1][x + ship.length] = 2;
            }
        }
    }

    //TODO
    //vertical ship
    else if (ship.direction === "v") {
        if (y + ship.length > gridLength) {
            return false;
        }
        for (let i = y; i < y + ship.length; i++) {
            grid[i][x] = 1;
        }
    }

    return grid;
}

exports.insertShip = insertShip;
