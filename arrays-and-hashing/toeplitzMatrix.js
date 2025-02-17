/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const map = new Map();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const d = c - r;
      if (map.has(d) && map.get(d) !== matrix[r][c]) {
        return false;
      } else {
        map.set(d, matrix[r][c]);
      }
    }
  }

  return true;
}
