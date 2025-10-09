function isSafe(row, col, num, board) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
    if (board[i][col] === num) return false;
    const subRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const subCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[subRow][subCol] === num) return false;
  }
  return true;
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(i, j, num, board)) {
            board[i][j] = num;
            if (solve(board)) return true;
            board[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function sudokuSolver(grid) {
    const g = grid.map(row => row.slice());
    if (solve(g)) 
        return g;
    return false;
}

module.exports = { sudokuSolver };
