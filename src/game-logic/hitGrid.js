function hitGrid(grid, location) {
    let x = location[0];
    let y = location[1];
    let target = grid[y][x];
    if (target === 0 || target === 2) {
        grid[y][x] = 3;
    }

    if (target === 1) {
        grid[y][x] = 4;
    }
    return grid;
}

exports.hitGrid = hitGrid;