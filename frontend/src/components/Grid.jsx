import React from "react";
import clsx from "clsx";

const Grid = ({ board, puzzle, selected, setSelected, handleInput }) => {
 
  return (
    <div className="p-[16px] bg-white border-2 rounded-lg">
      <table>
        <tbody
          className="[&>tr:nth-child(3)]:border-b-2 [&>tr:nth-child(3)]:border-b-gray-700
                        [&>tr:nth-child(1)]:border-t-2 [&>tr:nth-child(1)]:border-t-gray-700
                        [&>tr:nth-child(6)]:border-b-2 [&>tr:nth-child(6)]:border-b-gray-700
                        [&>tr:nth-child(9)]:border-b-2 [&>tr:nth-child(9)]:border-b-gray-700"
        >
          {board.map((row, rIdx) => {
            return (
              <tr
                key={rIdx}
                className="border border-collapse 
                                    [&>td:nth-child(3)]:border-r-2 [&>td:nth-child(3)]:border-r-gray-700
                                    [&>td:nth-child(1)]:border-l-2 [&>td:nth-child(1)]:border-l-gray-700
                                    [&>td:nth-child(6)]:border-r-2 [&>td:nth-child(6)]:border-r-gray-700
                                    [&>td:nth-child(9)]:border-r-2 [&>td:nth-child(9)]:border-r-gray-700"
              >
                {row.map((cell, cIdx) => {
                  const isPrefilled = puzzle[rIdx][cIdx] !== null;
                  const isRow = selected && rIdx === selected[0];
                  const isCol = selected && cIdx === selected[1];
                  const isBox = selected && Math.floor(rIdx / 3) === Math.floor(selected[0] / 3) &&
                    Math.floor(cIdx / 3) === Math.floor(selected[1] / 3);

                  return (
                    <td
                      key={cIdx}
                      className={clsx(
                      "border-[1px] border-zinc-400 w-10 h-10 text-center transition-colors",
                      (isRow || isCol || isBox) && "bg-blue-100"
                    )}
                      
                    >
                      <input
                        type="text"
                        maxLength={1}
                        value={cell === null ? "" : cell}
                        readOnly={isPrefilled}
                        onFocus={() => {
                          setSelected([rIdx, cIdx]);
                        }}
                        onClick={() => {
                          setSelected([rIdx, cIdx]);
                        }}
                        onChange={(e)=>{
                          handleInput(e.target.value,rIdx,cIdx);
                        }}
                        className="w-10 h-10 text-center border-none font-bold outline-none cursor-default text-black  caret-transparent focus:bg-blue-400"
                        
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
