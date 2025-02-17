/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = new Set();
  const atlantic = new Set();

  function dfs(r, c, visited, prevHeight) {
    if (
      visited.has(`${r}${c}`) ||
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    visited.add(`${r}${c}`);
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific, heights[0][c]);
    dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, heights[r][0]);
    dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
  }

  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (atlantic.has(`${r}${c}`) && pacific.has(`${r}${c}`)) {
        result.push([r, c]);
      }
    }
  }

  return result;
}
