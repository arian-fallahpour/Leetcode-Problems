const { Queue } = require("datastructures-js");

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let islands = 0;

  function bfs(r, c) {
    const queue = new Queue();
    queue.enqueue([r, c]);
    grid[r][c] = "0";

    while (!queue.isEmpty()) {
      const [row, col] = queue.dequeue();
      const directions = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
      ];

      for (let [nr, nc] of directions) {
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1") {
          queue.enqueue([nr, nc]);
          grid[nr][nc] = "0";
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        bfs(r, c);
        islands++;
      }
    }
  }

  return islands;
}
