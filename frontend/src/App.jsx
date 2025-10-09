import React, { useState } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";

const App = () => {
  const [board , setBoard] = useState(Array(9)
    .fill()
    .map(() => Array(9).fill(null)));

  const [puzzle, setPuzzle]= useState(Array(9)
    .fill()
    .map(() => Array(9).fill(null)));

  const handleInput = (value,row,col)=>{
    if(value === "" || value >= 1 && value <= 9){
      setBoard(prevBoard => {
        const newBoard = prevBoard.map(r => r.slice());
        newBoard[row][col] = value === "" ? null : parseInt(value, 10);
        return newBoard;
      })
    }
  } 
  

  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-8">
      <h1 className="text-3xl font-bold font">Sudoku Solver</h1>
      <Grid
        board={board}
        puzzle={puzzle}
        selected={selected}
        setSelected={setSelected}
        handleInput={handleInput}
      />
      <Controls />
    </div>

  );
};

export default App;
