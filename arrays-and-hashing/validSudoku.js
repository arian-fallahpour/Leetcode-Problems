/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rowsMaps = {};
  const colsMaps = {};
  const boxesMaps = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j];
      if (val === ".") continue;

      // Check if has duplicate in rows
      if (!rowsMaps[i]) rowsMaps[i] = {};
      if (rowsMaps[i][val] === true) return false;
      rowsMaps[i][val] = true;

      // Check if has duplicate in cols
      if (!colsMaps[j]) colsMaps[j] = {};
      if (colsMaps[j][val] === true) return false;
      colsMaps[j][val] = true;

      // Check if has duplicate in boxes
      const boxIndex = Math.floor(j / 3) + Math.floor(i / 3) * 3;
      if (!boxesMaps[boxIndex]) boxesMaps[boxIndex] = {};
      if (boxesMaps[boxIndex][val] === true) return false;
      boxesMaps[boxIndex][val] = true;
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
