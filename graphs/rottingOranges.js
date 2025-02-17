/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  if (grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  const fresh = new Set();
  let rotten = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        rotten.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh.add(`${r},${c}`);
      }
    }
  }

  let totalTime = 0;
  while (rotten.length > 0) {
    const nextRotten = [];

    while (rotten.length > 0) {
      const [r, c] = rotten.pop();
      const adjacent = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ];

      for (const [row, col] of adjacent) {
        if (row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] === 1) {
          nextRotten.push([row, col]);
          grid[row][col] = 2;
          fresh.delete(`${row},${col}`);
        }
      }
    }

    if (nextRotten.length > 0) {
      rotten = nextRotten;
      totalTime++;
    }
  }

  if (fresh.size > 0) {
    return -1;
  }

  return totalTime;
}
