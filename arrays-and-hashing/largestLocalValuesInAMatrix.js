/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const width = rows - 2;

  const result = [];
  for (let r = 0; r < width; r++) {
    result.push([]);
    for (let c = 0; c < width; c++) result[r].push(-Infinity);
  }

  for (let r = 0; r < rows - width + 1; r++) {
    for (let c = 0; c < cols - width + 1; c++) {
      for (let n = 0; n < width; n++) {
        for (let m = 0; m < width; m++) {
          if (grid[r + n][c + m] > result[n][m]) {
            result[n][m] = grid[r + n][c + m];
          }
        }
      }
    }
  }

  return result;
}
