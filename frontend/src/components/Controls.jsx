import React from 'react'

const Controls = () => {
  return (
    <div className='flex flex-row justify-between gap-8 items-center'>
        <button className='border p-2 rounded'>Check</button>
        <button className='border p-2 rounded hover'>Reset</button>
        <button className='border p-2 rounded'>New Puzzle</button>
    </div>
  )
}

export default Controls