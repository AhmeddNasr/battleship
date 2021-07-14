function hitGrid(grid, location) {
    let x = location[0];
    let y = location[1];
    target = grid[y][x];
    if (target === 0 || target === 2) {
        grid[y][x] = 3;
    }
    return grid;
}

exports.hitGrid = hitGrid;