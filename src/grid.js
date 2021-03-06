function Grid(props) {

    let grid = props.grid;
    let rows = [];
    let tempColumn = [];
    for (let i = 0; i < grid.length; i++) {
        tempColumn = [];
        for (let y = 0; y < grid.length; y++) {
            if(grid[i][y] === 0) {
                tempColumn.push(
                    <div id={`${y}${i}`} className="empty-square square" key={`(${y},${i})`}></div>
                )
            } else if (grid[i][y] === 1) {
                tempColumn.push(
                    <div id={`${y}${i}`} className="full-square square" key={`(${y},${i})`}></div>
                )
            } else if (grid[i][y] === 2) {
                tempColumn.push(
                    <div id={`${y}${i}`} className="proximity-square square" key={`(${y},${i})`}></div>
                )
            } else if (grid[i][y] === 3) {
                tempColumn.push(
                    <div id={`${y}${i}`} className="miss-square square" key={`(${y},${i})`}></div>
                )
            } else if (grid[i][y] === 4) {
                tempColumn.push(
                    <div id={`${y}${i}`} className="hit-square square" key={`(${y},${i})`}></div>
                )
            }
        }
        rows.push(tempColumn);
    }

    return (rows);
}

export default Grid;