import Grid from "./grid.js";
import React, { useState, useEffect } from "react";
import "./grid-css.css";
const shipGenerator =
    require("./game-logic/battleshipGridGenerator").battleshipGridGenerator;
const hitGrid = require("./game-logic/hitGrid").hitGrid;

function App() {
    const [grid, setGrid] = useState(shipGenerator());
    useEffect(() => {
        let gridCells = document.querySelectorAll(".square");
        // console.log(gridCells);
        // let counterX = 0;
        // let counterY = 0;
        gridCells.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                setGrid([...hitGrid(grid, [e.target.id[0], e.target.id[1]])]);
            });
            // cell.onClick = function (e) {
            //     console.log(counterX, counterY);
            //     setGrid(hitGrid(grid, [counterX, counterY]))
            // };
            // counterX = (counterX + 1)%10;
            // if (counterX === 0) {
            //     counterY = (counterY + 1)%10;
            // }
        });
    }, []);

    return (
        <div className="game">
            <h1>Battleship 2.0</h1>
            <div className="grid">
                <Grid grid={grid} />
            </div>
            <button onClick={() => setGrid(shipGenerator())}>Random</button>
        </div>
    );
}

export default App;
