const { Queue } = require("datastructures-js");

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  const rows = board.length;
  const cols = board[0].length;

  const visited = new Set();

  function bfs(r, c) {
    const region = [];

    const queue = new Queue();
    queue.enqueue([r, c]);

    let hitBorder = false;
    while (!queue.isEmpty()) {
      const [row, col] = queue.dequeue();
      const adjacent = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
      ];

      for (const [ar, ac] of adjacent) {
        if (ar <= 0 || ar >= rows - 1 || ac <= 0 || ac >= cols - 1) {
          hitBorder = true;
        }

        if (
          ar >= 0 &&
          ar < rows &&
          ac >= 0 &&
          ac < cols &&
          !visited.has(`${ar}${ac}`) &&
          board[ar][ac] === "O"
        ) {
          queue.enqueue([ar, ac]);
          visited.add(`${ar}${ac}`);
          region.push([ar, ac]);
        }
      }
    }

    if (!hitBorder) {
      while (!region.isEmpty()) {
        const [row, col] = region.pop();
        board[row][col] = "X";
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O" && !visited.has(`${r}${c}`)) {
        bfs(r, c);
      }
    }
  }
}
