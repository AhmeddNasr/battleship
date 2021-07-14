import Grid from "./grid.js";
import React, { useState } from "react";
import './grid-css.css'
const shipGenerator = require('./game-logic/battleshipGridGenerator').battleshipGridGenerator;

function App() {
    const [grid, setGrid] = useState(shipGenerator());
    return (
        <div className="game">
            <h1>Battleship 2.0</h1>
            <div className='grid'>
              <Grid grid={grid} />
            </div>
            <button onClick={() => setGrid(shipGenerator())}>Random</button>
        </div>
    );
}

export default App;
