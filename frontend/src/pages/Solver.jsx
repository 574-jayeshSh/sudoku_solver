import React, { useState } from "react";
import Grid from "../components/Grid";
import Controls from "../components/Controls";

const App = () => {
  const [board, setBoard] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(null))
  );

  const [puzzle, setPuzzle] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(null))
  );

  const handleInput = (value, row, col) => {
    if (value === "" || (value >= 1 && value <= 9)) {
      setBoard((prevBoard) => {
        const newBoard = prevBoard.map((r) => r.slice());
        newBoard[row][col] = value === "" ? null : parseInt(value, 10);
        return newBoard;
      });
    }
  };


  const [solution, setSolution] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(null))
  );

  const [status, setStatus] = useState("");
  const [greenCount , setGreenCount] = useState(0);

  const handleCheck = () => {
    const flatBoard = board.flat();
    const flatSolution = solution.flat();

    if (flatBoard.every((cell, i) => cell === flatSolution[i])) {
      setStatus("Correct");

      let count = 0;
      const totalCells = 81;
      const Interval = setInterval(() =>{
        count++;
        setGreenCount(count);
        if(count === totalCells) clearInterval(Interval);
      },30)
    } else {
      setStatus("Incorrect , try again !");
      setGreenCount(0);
    }
  };

  const handleReset = () => {
    setBoard(puzzle.map((row) => row.slice()));
    setStatus("");
    setSelected(null);
    setGreenCount(0);
  };

  const handleNewPuzzle = () => {
    setGreenCount(0);
  };

  const handleSolve = async () => {
    try {
      setStatus("Solving...");
      // Convert null to 0 for backend
      const gridForBackend = board.map(row => row.map(cell => cell === null ? 0 : cell));
      
      const response = await fetch("http://localhost:3000/solve",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ grid: gridForBackend })
      });

      const data = await response.json();

      if(data.ok){
        setSolution(data.solution);
        setBoard(data.solution);
        setStatus("Puzzle Solved !");
      }
      else{
        setStatus(data.error || "Failed to solve the puzzle");
      }
    }
    catch(err){
      console.error(err);
      setStatus("Error connecting to the server");
    }
  }

  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col justify-center items-center max-h-full max-w-full m-3 gap-y-6">
      <div className="flex flex-col justify-center items-center max-h-full max-w-full m-3 gap-y-6">
        {status && (
          <div className="relative">
            <div className=" top-0  p-2.5 -translate-3 bg-black text-white border-10-black rounded">
              {status}
            </div>
          </div>
        )}
        <h1 className="text-3xl font-bold font">Sudoku Solver</h1>
        <Grid
          board={board}
          puzzle={puzzle}
          selected={selected}
          setSelected={setSelected}
          handleInput={handleInput}
          greenCount={greenCount}
        />
        <Controls
          handleCheck={handleCheck}
          handleReset={handleReset}
          handleNewPuzzle={handleNewPuzzle}
          handleSolve={handleSolve}
        />
      </div>
    </div>
  );
};

export default App;
