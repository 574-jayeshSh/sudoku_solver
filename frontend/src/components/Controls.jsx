import React from 'react'

const Controls = ({ handleCheck, handleReset, handleNewPuzzle, handleSolve }) => {
  return (
    <div className='mt-2.5 text-white'>
        <button onClick={handleCheck} className=' p-2 mr-2 bg-black rounded-lg '>Check</button>
        <button onClick={handleReset} className=' p-2 mr-2 bg-black rounded-lg '>Reset</button>
        <button onClick={handleNewPuzzle} className=' p-2 mr-2 bg-black rounded-lg '>New Puzzle</button>
        <button onClick={handleSolve} className=' p-2 mr-2 bg-black rounded-lg '>Solve</button>
    </div>
  )
}

export default Controls