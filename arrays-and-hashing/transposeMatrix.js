/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposed = [];
  for (let r = 0; r < cols; r++) transposed.push([]);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      transposed[c][r] = matrix[r][c];
    }
  }

  return transposed;
}
