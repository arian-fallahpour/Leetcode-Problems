const { Queue } = require("datastructures-js");

// NOTE: Destructuring does not affect performance

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  if (grid.length === 0) return 0;

  let maxArea = 0;

  function dfs(r, c) {
    let currentArea = 0;
    const queue = new Queue();

    queue.enqueue([r, c]);
    currentArea++;
    grid[r][c] = 0;

    while (!queue.isEmpty()) {
      const [row, col] = queue.dequeue();
      const directions = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
      ];
      for (let [newRow, newCol] of directions) {
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          queue.enqueue([newRow, newCol]);
          currentArea++;
          grid[newRow][newCol] = 0;
        }
      }
    }

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
  }

  const rows = grid.length;
  const cols = grid[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        dfs(r, c);
      }
    }
  }

  return maxArea;
}
