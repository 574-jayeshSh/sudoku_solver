import React from 'react'

const Controls = ({ handleCheck, handleReset, handleNewPuzzle }) => {
  return (
    <div className='mt-2.5'>
        <button onClick={handleCheck} className=' p-2 mr-2 bg-black rounded-lg '>Check</button>
        <button onClick={handleReset} className=' p-2 mr-2 bg-black rounded-lg '>Reset</button>
        <button onClick={handleNewPuzzle} className=' p-2 mr-2 bg-black rounded-lg '>New Puzzle</button>
    </div>
  )
}

export default Controls